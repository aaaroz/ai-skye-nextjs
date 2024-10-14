"use server";

import { baseApiUrlPublic, TFeaturesResponse } from "@/libs/entities";

export const getAllFeaturesClient = async () => {
  const res: TFeaturesResponse = await fetch(`${baseApiUrlPublic}/api/features`, {
    method: "GET",
  }).then((response) => response.json());
  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return res.data;
};
