"use server";

import { baseApiUrl, TChangePasswordSchema } from "@/libs/entities";
import { TUpdatePasswordResponse } from "./type";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export const updatePassword = async ({
  oldPassword,
  newPassword,
}: TChangePasswordSchema) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    redirect("/auth/login");
  }

  const res: TUpdatePasswordResponse = await fetch(
    `${baseApiUrl}/api/update-password`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPassword,
        oldPassword,
      }),
    }
  ).then((response) => response.json());

  if (!res.success) {
    console.error(res);
    if (res.status === 400) {
      throw new Error(res.data.message);
    }
    throw new Error(res.data.message);
  }

  return res.data.message;
};
