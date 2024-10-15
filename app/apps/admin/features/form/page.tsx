import * as React from "react";
import { FeatureFormPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Form Fitur",
};
const FeatureFormPage: NextPage = (): React.ReactElement => {
  return <FeatureFormPageModule />;
};

export default FeatureFormPage;
