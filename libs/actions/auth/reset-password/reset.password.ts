"use server";

import { baseApiUrl, TResetPasswordSchema } from "@/libs/entities";
import { TResetPasswordResponse } from "./type";

export const resetPassword = async ({
  password,
  userId,
}: TResetPasswordSchema) => {
  const res: TResetPasswordResponse = await fetch(
    `${baseApiUrl}/api/password/forgot/reset`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        newPassword: password,
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
