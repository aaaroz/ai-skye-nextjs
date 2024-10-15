import * as React from "react";
import { Metadata, NextPage } from "next";
import { UsersPageModule } from "./_modules";

export const metadata: Metadata = {
  title: "Pengguna",
};

const UsersPage: NextPage = (): React.ReactElement => {
  return <UsersPageModule />;
};

export default UsersPage;
