import * as React from "react";
import { NextPage } from "next";
import { DashboardAdminPageModule } from "./_modules";

export const runtime = "edge";

const DashboardAdminPage: NextPage = (): React.ReactElement => {
  return <DashboardAdminPageModule />;
};

export default DashboardAdminPage;
