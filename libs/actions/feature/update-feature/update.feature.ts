"use server";

import {
  baseApiUrl,
  TAdminFeatureSchema,
  TSingleFeatureResponse,
} from "@/libs/entities";
import { getSession } from "next-auth/react";

export const updateFeature = async ({
  id,
  name,
  description,
  subDescription,
  category,
  prompts,
}: TAdminFeatureSchema) => {
  const session = await getSession();
  if (!session) {
    throw new Error("401 - Unauthorized!");
  }
  const token = session.user.token;
  const payload = {
    featuresname: name,
    selectedCategoryname: category,
    deskripsi: description,
    subdeskripsi: subDescription,
    prompts: prompts,
  };

  const res: TSingleFeatureResponse = await fetch(
    `${baseApiUrl}/api/v1/features/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  ).then((response) => response.json());

  if (!res.success) {
    console.error(res.error);
    throw new Error(res.error);
  }

  return {
    ...res.data,
  };
};
