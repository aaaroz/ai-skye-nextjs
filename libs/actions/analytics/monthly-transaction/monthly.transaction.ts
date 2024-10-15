"use server";

import { auth } from "@/libs/auth";
import { TMonthlyTransactions, TTransactionData } from "../type";
import { baseApiUrl } from "@/libs/entities";

export const getMonthlyTransactions = async (): Promise<TTransactionData[]> => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res = (await fetch(`${baseApiUrl}/api/v1/monthly-transactions`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())) as TMonthlyTransactions;

  if (res.status !== 200) {
    console.error(res);
    if (res.body) {
      throw new Error(res.body.message);
    }
    throw new Error("Internal Server Error !");
  }

  return res.body.data;
};
