"use server";
import "server-only";
import { signOut } from "@/libs/auth";

export const logout = async () => {
  try {
    return await signOut({
      redirect: true,
      redirectTo: "/auth/login",
    });
  } catch (err) {
    throw err;
  }
};
