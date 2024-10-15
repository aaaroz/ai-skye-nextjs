"use server";

import { cookies } from "next/headers";

export const getCredentials = async () => {
  const cookie = cookies();

  const phoneNumber = cookie.get("phoneNumber")?.value as string;
  const password = cookie.get("password")?.value as string;

  return { phoneNumber, password };
};
