"use server";

import { baseApiUrl } from "@/libs/entities";
import { getDocumentById } from "../get-document-by-id";
import { auth } from "@/libs/auth";
import { TUpdateDocumentResponse } from "./type";

export const updateDocument = async (
  text: string,
  title: string,
  id: string
) => {
  const document = await getDocumentById(id);
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }
  const payload = {
    title: title,
    category: document.category,
    response: text,
    tokensUsed: document.tokensUsed,
    save: true,
  };

  const res: TUpdateDocumentResponse = await fetch(
    `${baseApiUrl}/api/update-history/${id}`,
    {
      method: "PUT",
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
