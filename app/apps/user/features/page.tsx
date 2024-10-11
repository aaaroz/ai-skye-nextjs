import * as React from "react";
import { NextPage } from "next";
import { FeaturesPageModule } from "./_modules";

export const runtime = "edge";

const FeaturesPage: NextPage = (): React.ReactElement => {
  return <FeaturesPageModule />;
};

export default FeaturesPage;
