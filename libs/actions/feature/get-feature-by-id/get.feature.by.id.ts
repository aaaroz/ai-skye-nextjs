"use server";

import { baseApiUrl, TSingleFeatureResponse } from "@/libs/entities";
import { getSession } from "next-auth/react";

export const getFeatureById = async (id: string) => {
  const session = await getSession();
  if (!session) {
    throw new Error('401 - Unauthorized!');
  }
  const token = session.user.token;
  const res: TSingleFeatureResponse = await fetch(
    `${baseApiUrl}/api/features/${id}`,
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
    throw new Error("Network response was not ok");
  }

  return res.data;
};
