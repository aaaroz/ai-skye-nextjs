"use server";

import { cookies } from "next/headers";

export const removeDataRegisterFromCookie = async () => {
  const cookie = cookies();
  cookie.delete("phoneNumber");
  cookie.delete("password");
  cookie.delete("name");

  return { message: "Data Cookie has been deleted!" };
};
