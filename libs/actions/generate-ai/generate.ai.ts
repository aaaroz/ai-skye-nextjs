"use server";
import { auth } from "@/libs/auth";
import { baseApiUrl, TFeatureAISchema } from "@/libs/entities";
import { getFeatureBySlug } from "../feature";
import { createSlug } from "@/libs/utils";

export const generateAI = async ({
  featureName,
  prompt,
  maxToken,
  productName,
}: TFeatureAISchema) => {
  const feature = await getFeatureBySlug(createSlug(featureName));
  const session = await auth();
  if (!session) {
    throw new Error("404 - Unauthorized!");
  }

  const token = session.user.token;

  const response = await fetch(`${baseApiUrl}/api/send-prompt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      categoryname: feature.categoryname,
      featuresname: featureName,
      prompt: prompt,
      max_words: maxToken,
      brandName: productName,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const reader = response.body ? response.body.getReader() : null;
  if (!reader) {
    throw new Error("Response body is null, unable to read stream.");
  }

  return reader;
};
