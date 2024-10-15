"use server";

import { cookies } from "next/headers";

export const storeCredentials = async (
  phoneNumber: string,
  password: string
) => {
  const cookie = cookies();

  cookie.set("phoneNumber", phoneNumber);
  cookie.set("password", password);
  return { message: "credentials has been stored to cookie" };
};
