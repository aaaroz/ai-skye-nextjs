import { baseApiUrl, TLoginSchema } from "@/libs/entities";
import { TAuthResponse } from "./type";

export const authenticate = async ({ phoneNumber, password }: TLoginSchema) => {
  const res: TAuthResponse = await fetch(`${baseApiUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber,
      password,
    }),
  }).then((response) => response.json());

  if (!res.success) {
    console.log(res);
    throw new Error(res?.error);
  }

  return {
    ...res.data,
  };
};
