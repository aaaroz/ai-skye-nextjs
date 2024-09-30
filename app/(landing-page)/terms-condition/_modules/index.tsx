import * as React from "react";
import { SubHeader } from "@/components/layout";
import { TermsSection } from "./sections";

export const TermsConditionPageModule: React.FC = (): React.ReactElement => {
  return (
    <>
      <SubHeader title="Ketentuan Pengguna" />
      <TermsSection/>
    </>
  );
};
