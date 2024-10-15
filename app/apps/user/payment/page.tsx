import * as React from "react";
import { PaymentPageModule } from "./_modules";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Pembayaran",
};

const PaymentPage: NextPage = (): React.ReactElement => {
  return <PaymentPageModule />;
};

export default PaymentPage;
