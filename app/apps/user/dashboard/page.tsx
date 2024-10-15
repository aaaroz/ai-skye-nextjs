import * as React from "react";
import { DashboardUserPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Dashboard User",
};
const DashboardUserPage: NextPage = (): React.ReactElement => {
  return <DashboardUserPageModule />;
};

export default DashboardUserPage;
