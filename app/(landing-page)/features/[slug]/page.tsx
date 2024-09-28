import * as React from "react";
import { NextPage } from "next";
import { FeatureDetailPageModule } from "./_modules";
import { dummyFeatures } from "@/libs/entities";

const FeatureDetailPage: NextPage<{
  params: { slug: string };
}> = ({ params: { slug } }): React.ReactElement => {
  const dummyFeature = dummyFeatures.find((item) => item.slug === slug);
  return <FeatureDetailPageModule data={dummyFeature} />;
};

export default FeatureDetailPage;
