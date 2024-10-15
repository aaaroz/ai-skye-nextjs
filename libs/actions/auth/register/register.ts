"use server";

import { baseApiUrl, TRegisterSchema } from "@/libs/entities";
import { TRegisterResponse } from "./type";
import { cookies } from "next/headers";

export const register = async ({
  name,
  phoneNumber,
  password,
}: TRegisterSchema) => {
  const cookie = cookies();
  cookie.set("phoneNumber", phoneNumber);
  cookie.set("password", password);
  cookie.set("name", name);

  const res: TRegisterResponse = await fetch(`${baseApiUrl}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phoneNumber,
      password,
    }),
  }).then((response) => response.json());

  if (!res.success) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    throw new Error("Network response was not ok");
  }

  return {
    ...res.data.data,
  };
};
