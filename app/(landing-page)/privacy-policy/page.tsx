import * as React from "react";
import { PrivacyPolicyPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
};
const PrivacyPolicyPage: NextPage = (): React.ReactElement => {
  return <PrivacyPolicyPageModule />;
};

export default PrivacyPolicyPage;
