"use server";

import { signIn } from "@/libs/auth";
import { TLoginSchema } from "@/libs/entities";
import { AuthError } from "next-auth";

export const login = async (value: TLoginSchema) => {
  const { phoneNumber, password } = value;
  try {
    await signIn("login", {
      phoneNumber,
      password,
      redirect: true,
      redirectTo: "/apps/user/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      throw error.cause?.err;
    }
    throw error;
  }
};
