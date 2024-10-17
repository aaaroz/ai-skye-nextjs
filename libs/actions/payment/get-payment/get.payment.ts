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
  const response: TPaymentResponse = await fetch(
    `${baseApiUrl}/api/get-token/${orderId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());

  if (response.status !== 200) {
    const errorText = response.message;
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`
    );
  }

  return response;
};
