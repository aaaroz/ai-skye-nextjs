"use server";

import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import { TProfileResponse } from "./type";
import { baseApiUrl } from "@/libs/entities";

export const getProfile = async (userId: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    redirect("/auth/login");
  }

  const res: TProfileResponse = await fetch(
    `${baseApiUrl}/api/profile/${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  if (res.status === "error") {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return res.data;
};
