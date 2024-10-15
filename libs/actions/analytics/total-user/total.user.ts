"use server";

import { auth } from "@/libs/auth";
import { baseApiUrl } from "@/libs/entities";
import { TGetUsersResponse } from "../../users/type";

export const getTotalUsers = async (): Promise<number> => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res: TGetUsersResponse = await fetch(`${baseApiUrl}/api/v1/get-users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Something went wrong!");
  }

  return res.totalUsers;
};
