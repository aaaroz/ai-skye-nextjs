import { getSession } from "next-auth/react";
import { baseApiUrl } from "@/libs/entities";
import { TGetSingleDocumentResponse } from "./type";

export const getDocumentById = async (id: string) => {
    const session = await getSession();
    const token = session?.user.token;
    if (!token) {
      throw new Error('401 - Unauthorized!');
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
