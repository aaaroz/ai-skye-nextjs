import * as React from "react";
import { NextPage } from "next";
import { FeaturesAIPageModule } from "./_modules";
import { dummyFeatures } from "@/libs/entities";

export const runtime = "edge";

const FeaturesAIPage: NextPage<{
  params: { id: string };
}> = ({ params: { id } }): React.ReactElement => {
  const dummyFeature = dummyFeatures.find((item) => item.id === id);
  return <FeaturesAIPageModule data={dummyFeature} />;
};

export default FeaturesAIPage;
