"use server";

import { baseApiUrl } from "@/libs/entities";
import { TGetSingleDocumentResponse } from "./type";
import { auth } from "@/libs/auth";

export const getDocumentById = async (id: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res: TGetSingleDocumentResponse = await fetch(
    `${baseApiUrl}/api/get-history/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error(res.details);
  }

  return res.data;
};
