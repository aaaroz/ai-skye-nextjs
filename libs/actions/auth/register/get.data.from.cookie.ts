"use server";

import { cookies } from "next/headers";

export const getDataRegisterFromCookie = async () => {
  const cookie = cookies();

  const phoneNumber = cookie.get("phoneNumber")?.value as string;
  const name = cookie.get("name")?.value as string;
  const password = cookie.get("password")?.value as string;

  return { phoneNumber, name, password };
};
