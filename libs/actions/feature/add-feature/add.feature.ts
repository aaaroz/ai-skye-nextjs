import {
  baseApiUrl,
  TAdminFeatureSchema,
  TSingleFeatureResponse,
} from "@/libs/entities";
import { getSession } from "next-auth/react";

export const addFeature = async ({
  name,
  description,
  subDescription,
  category,
  prompts,
}: TAdminFeatureSchema) => {
  const session = await getSession();
  const token = session?.user.token;
  if (!token) {
    throw new Error('401 - Unauthorized!');
  }
  const payload = {
    featuresname: name,
    selectedCategoryname: category,
    deskripsi: description,
    subdeskripsi: subDescription,
    prompts: prompts,
  };
  const res: TSingleFeatureResponse = await fetch(
    `${baseApiUrl}/api/v1/add-feature`,
    {
      method: "POST",
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
