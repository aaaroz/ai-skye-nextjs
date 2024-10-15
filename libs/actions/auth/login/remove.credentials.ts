"use server";

import { cookies } from "next/headers";

export const removeCredentials = async () => {
  const cookie = cookies();
  cookie.delete("phoneNumber");
  cookie.delete("password");

  return { message: "Data Cookie has been deleted!" };
};
