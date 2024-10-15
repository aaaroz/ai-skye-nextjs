import * as React from "react";
import { Metadata, NextPage } from "next";
import { TopUpPageModule } from "./_modules";


export const metadata: Metadata = {
  title: "Top up Kata",
};


const TopUpPage: NextPage = (): React.ReactElement => {
  return <TopUpPageModule />;
};
export default TopUpPage;
