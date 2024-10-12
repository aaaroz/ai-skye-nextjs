"use server";

import { baseApiUrl, TVerifySchema } from "@/libs/entities";
import { TVerifyUpdateResponse } from "./type";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export const verifyOtpUpdateProfile = async ({
  codeVerification,
  userId,
}: TVerifySchema) => {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  const token = session.user.token;

  const res: TVerifyUpdateResponse = await fetch(
    `${baseApiUrl}/api/verify-otp-update`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        enteredOtp: codeVerification,
      }),
    }
  ).then((response) => response.json());

  if (res.status === "error") {
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Something went wrong!");
  }

  return res.message;
};
