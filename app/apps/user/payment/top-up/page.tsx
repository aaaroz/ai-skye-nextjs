import * as React from "react";
import { NextPage } from "next";
import { TopUpPageModule } from "./_modules";

export const runtime = "edge";

const TopUpPage: NextPage = (): React.ReactElement => {
  return <TopUpPageModule />;
};
export default TopUpPage;
