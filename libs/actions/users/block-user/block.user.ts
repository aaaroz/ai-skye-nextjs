"use server";

import { auth } from "@/libs/auth";
import { baseApiUrl } from "@/libs/entities";
import { redirect } from "next/navigation";
import { TBlockUserResponse } from "./type";

export const blockUser = async (id: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    redirect("/auth/login");
  }
  const res: TBlockUserResponse = await fetch(
    `${baseApiUrl}/api/v1/block-user/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());

  if (res.status === "success") {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Something went wrong!");
  }

  return res.message;
};
