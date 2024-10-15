"use server";

import { baseApiUrl, TForgotPasswordSchema } from "@/libs/entities";
import { TForgotPasswordResponse } from "./type";

export const forgotPasswordInit = async ({
  phoneNumber,
}: TForgotPasswordSchema) => {
  const res: TForgotPasswordResponse = await fetch(
    `${baseApiUrl}/api/password/forgot/initiate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
      }),
    }
  ).then((response) => response.json());

  console.log(res);
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
