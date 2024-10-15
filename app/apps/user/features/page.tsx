import * as React from "react";
import { Metadata, NextPage } from "next";
import { FeaturesPageModule } from "./_modules";

export const metadata: Metadata = {
  title: "AI Generator",
};
const FeaturesPage: NextPage = (): React.ReactElement => {
  return <FeaturesPageModule />;
};

export default FeaturesPage;
