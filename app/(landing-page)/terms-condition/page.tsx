import * as React from "react";
import { TermsConditionPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Ketentuan Pengguna",
};

const TermsConditionPage: NextPage = (): React.ReactElement => {
  return <TermsConditionPageModule />;
};

export default TermsConditionPage;
