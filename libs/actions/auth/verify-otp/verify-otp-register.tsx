"use server";

import { baseApiUrl, TVerifySchema } from "@/libs/entities";
import { TVerifyRegisterResponse } from "./type";

export const verifyOtpRegister = async ({
  codeVerification,
  userId,
}: TVerifySchema) => {
  const res: TVerifyRegisterResponse = await fetch(
    `${baseApiUrl}/api/verify-otp`,
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

  if (!res.success) {
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return {
    message: res.message,
  };
};
