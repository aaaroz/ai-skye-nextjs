import * as React from "react";
import { NextPage } from "next";
import { UsersPageModule } from "./_modules";

export const runtime = "edge";

const UsersPage: NextPage = (): React.ReactElement => {
  return <UsersPageModule />;
};

export default UsersPage;
