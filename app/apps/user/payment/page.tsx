import * as React from "react";
import { NextPage } from "next";
import { PaymentPageModule } from "./_modules";

export const runtime = "edge";

const PaymentPage: NextPage = (): React.ReactElement => {
  return <PaymentPageModule />;
};

export default PaymentPage;
