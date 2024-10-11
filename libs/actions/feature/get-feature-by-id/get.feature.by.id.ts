"use server";

import { auth } from "@/libs/auth";
import { baseApiUrl, TSingleFeatureResponse } from "@/libs/entities";
import { redirect } from "next/navigation";

export const getFeatureById = async (id: string) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    redirect("/auth/login");
  }
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
