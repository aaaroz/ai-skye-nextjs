import * as React from "react";
import { Metadata, NextPage } from "next";
import { FeaturesAdminPageModule } from "./_modules";

export const metadata: Metadata = {
  title: "Fitur Admin",
};

const FeaturesAdminPage: NextPage = (): React.ReactElement => {
  return <FeaturesAdminPageModule />;
};

export default FeaturesAdminPage;
