import * as React from "react";
import { Metadata, NextPage } from "next";
import { DashboardAdminPageModule } from "./_modules";

export const metadata: Metadata = {
  title: "Administrator",
};

const DashboardAdminPage: NextPage = (): React.ReactElement => {
  return <DashboardAdminPageModule />;
};

export default DashboardAdminPage;
