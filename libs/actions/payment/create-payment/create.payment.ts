"use server";

import { auth } from "@/libs/auth";
import { baseApiUrl } from "@/libs/entities";
import { TPaymentResponse } from "../type";
type TPayloadPayment = {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  tax: number;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
};

export const createPaymentMidtrans = async (
  payload: TPayloadPayment
): Promise<TPaymentResponse> => {
  const session = await auth();
  if (!session) {
    throw new Error("Error Unauthorized!");
  }
  const token = session.user.token;
  const response = await fetch(`${baseApiUrl}/api/create-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Use token from environment variable
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`
    );
  }

  return response.json();
};
