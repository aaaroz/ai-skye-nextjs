import * as React from "react";
import { SubHeader } from "@/components/layout";
import { TermsSection } from "./sections";

export const TermsConditionPageModule: React.FC = (): React.ReactElement => {
  return (
    <div data-testid="terms-page-module">
      <SubHeader title="Ketentuan Pengguna" />
      <TermsSection />
    </div>
  );
};
