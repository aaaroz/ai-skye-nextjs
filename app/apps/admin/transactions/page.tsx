import * as React from "react";
import { TransactionPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Semua Transaksi",
};

const TransactionPage: NextPage = (): React.ReactElement => {
  return <TransactionPageModule />;
};

export default TransactionPage;
