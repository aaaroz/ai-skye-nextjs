import * as React from "react";
import { Metadata, NextPage } from "next";
import { FeaturesAIPageModule } from "./_modules";
import { getFeatureBySlug } from "@/libs/actions";

export const runtime = "edge";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const featureData = await getFeatureBySlug(slug);
  return {
    title: `${featureData.featuresname}` || "Fitur",
  };
};

const FeaturesAIPage: NextPage<{
  params: { slug: string };
}> = async ({ params: { slug } }): Promise<React.ReactElement> => {
  const feature = await getFeatureBySlug(slug);
  return <FeaturesAIPageModule data={feature} />;
};

export default FeaturesAIPage;
