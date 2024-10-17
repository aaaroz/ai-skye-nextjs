"use server";

import { auth } from "@/libs/auth";
import { TPaymentResponse } from "../type";
import { baseApiUrl } from "@/libs/entities";

export const getPaymentMidtrans = async (
  orderId: string
): Promise<TPaymentResponse> => {
  const session = await auth();
  if (!session) {
    throw new Error("Error Unauthorized!");
  }
  const token = session.user.token;
  console.log(orderId);
  const response = await fetch(`${baseApiUrl}/api/get-token/${orderId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok || response.status !== 200) {
    const errorText = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`
    );
  }
  console.log(response.json());
  return response.json();
};
