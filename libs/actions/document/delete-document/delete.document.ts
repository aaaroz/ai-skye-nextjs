"use server";

import { auth } from "@/libs/auth";
import { baseApiUrl } from "@/libs/entities";
import { redirect } from "next/navigation";
import { TDeleteDocumentResponse } from "./type";

export const deleteDocument = async (id: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    redirect("/auth/login");
  }
  const res: TDeleteDocumentResponse = await fetch(
    `${baseApiUrl}/api/delete-history/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());

  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return res.message;
};
