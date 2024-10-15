"use server";

import { baseApiUrl } from "@/libs/entities";
import { TSaveDocumentResponse } from "./type";
import { auth } from "@/libs/auth";

export const saveDocument = async (
  text: string,
  title: string,
  category: string,
  tokensUsed: number
) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }
  const payload = {
    title: title,
    response: text,
    category,
    tokensUsed,
    save: true,
  };

  const res: TSaveDocumentResponse = await fetch(
    `${baseApiUrl}/api/save-history`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  ).then((response) => response.json());

  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error(res.details);
  }

  return res.message;
};
