"use server";

import { auth } from "@/libs/auth";
import {
  baseApiUrl,
  TAdminFeatureSchema,
  TSingleFeatureResponse,
} from "@/libs/entities";
import { redirect } from "next/navigation";

export const updateFeature = async ({
  id,
  name,
  description,
  subDescription,
  category,
  prompts,
}: TAdminFeatureSchema) => {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
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
