"use server";

import { TProfileResponse } from "./type";
import { baseApiUrl } from "@/libs/entities";
import { auth } from "@/libs/auth";

export const getProfile = async (userId?: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res: TProfileResponse = await fetch(
    `${baseApiUrl}/api/profile/${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
