import * as React from "react";
import { FeaturesPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Fitur AI",
};

const FeaturesPage: NextPage = (): React.ReactElement => {
  return <FeaturesPageModule />;
};

export default FeaturesPage;
