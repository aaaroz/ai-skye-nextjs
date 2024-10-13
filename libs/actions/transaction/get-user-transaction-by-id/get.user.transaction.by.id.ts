"use server";

import { baseApiUrl } from "@/libs/entities";
import { auth } from "@/libs/auth";
import { TSingleTransactionResponse } from "../type";

export const getUserTransactionById = async (orderId: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res: TSingleTransactionResponse = await fetch(
    `${baseApiUrl}/api/transactions/${orderId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  ).then((response) => response.json());

  if (res.status !== 200) {
    console.error(res);
    if (!res.body.success) {
      throw new Error(res.body.message);
    }
    throw new Error("Something went wrong!");
  }

  return res.body.transaction;
};
