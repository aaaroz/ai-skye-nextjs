import * as React from "react";
import { NextPage } from "next";
import { TransactionPageModule } from "./_modules";

export const runtime = "edge";

const TransactionPage: NextPage = (): React.ReactElement => {
  return <TransactionPageModule />;
};

export default TransactionPage;
