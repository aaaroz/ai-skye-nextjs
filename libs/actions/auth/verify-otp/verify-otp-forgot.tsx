"use server";

import { baseApiUrl, TVerifySchema } from "@/libs/entities";
import { TVerifyForgotPasswordResponse } from "./type";

export const verifyOtpForgotPassword = async ({
  codeVerification,
  userId,
}: TVerifySchema) => {
  const res: TVerifyForgotPasswordResponse = await fetch(
    `${baseApiUrl}/api/password/forgot/verify-otp`,
    {
      method: "POST",
      headers: {
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
    throw new Error("Network response was not ok");
  }

  return {
    ...res.data,
  };
};
