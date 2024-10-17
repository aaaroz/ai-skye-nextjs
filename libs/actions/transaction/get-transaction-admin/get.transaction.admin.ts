"use server";

import { auth } from "@/libs/auth";
import { TAdminResponseBody, TUserTransaction } from "../type";
import { baseApiUrl } from "@/libs/entities";

export const getTransactionAdmin = async (): Promise<
  TUserTransaction[] | undefined
> => {
  const session = await auth();
  const token = session?.user.token;
  if (session?.user.role !== "admin") {
    return;
  }
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res = (await fetch(`${baseApiUrl}/api/v1/user-transactions`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())) as TAdminResponseBody;

  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Something went wrong!");
  }

  return res.body as TUserTransaction[];
};
