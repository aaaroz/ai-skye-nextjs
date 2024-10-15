"use server";

import { auth } from "@/libs/auth";
import { TAnalyticsResponse, TMonthlyVisitorsCount } from "../type";
import { baseApiUrl } from "@/libs/entities";

export const getMonthlyVisitors = async (): Promise<TMonthlyVisitorsCount> => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const res = (await fetch(`${baseApiUrl}/api/v1/visitors-monthly`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())) as TAnalyticsResponse;

  if (res.status === "error") {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return res.data.monthlyVisitorCounts as TMonthlyVisitorsCount;
};
