import * as React from "react";
import { NextPage } from "next";
import { FeatureDetailPageModule } from "./_modules";
import { getFeatureBySlug } from "@/libs/actions";

export const runtime = "edge";

const FeatureDetailPage: NextPage<{
  params: { slug: string };
}> = async ({ params: { slug } }): Promise<React.ReactElement> => {
  const feature = await getFeatureBySlug(slug);
  return <FeatureDetailPageModule featureData={feature} />;
};

export default FeatureDetailPage;
