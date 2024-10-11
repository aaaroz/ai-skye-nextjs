import * as React from "react";
import { NextPage } from "next";
import { FeaturesAIPageModule } from "./_modules";
import { getFeatureBySlug } from "@/libs/actions";

export const runtime = "edge";

const FeaturesAIPage: NextPage<{
  params: { slug: string };
}> = async ({ params: { slug } }): Promise<React.ReactElement> => {
  const feature = await getFeatureBySlug(slug);
  return <FeaturesAIPageModule data={feature} />;
};

export default FeaturesAIPage;
