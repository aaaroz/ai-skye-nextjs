"use server";

import { baseApiUrl, TSingleFeatureResponse } from "@/libs/entities";

export const getFeatureBySlug = async (slug: string) => {
  const res: TSingleFeatureResponse = await fetch(
    `${baseApiUrl}/api/features-slug/${slug}`,
    {
      method: "GET",
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
