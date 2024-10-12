import { getSession } from "next-auth/react";
import { TProfileResponse } from "./type";
import { baseApiUrl } from "@/libs/entities";

export const getProfile = async (userId?: string) => {
  const session = await getSession();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res: TProfileResponse = await fetch(
    `${baseApiUrl}/api/profile/${userId ? userId : session.user.id}`,
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
