import * as React from "react";
import { Metadata, NextPage } from "next";
import { FeatureDetailPageModule } from "./_modules";
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

const FeatureDetailPage: NextPage<{
  params: { slug: string };
}> = async ({ params: { slug } }): Promise<React.ReactElement> => {
  const feature = await getFeatureBySlug(slug);
  return <FeatureDetailPageModule featureData={feature} />;
};

export default FeatureDetailPage;
