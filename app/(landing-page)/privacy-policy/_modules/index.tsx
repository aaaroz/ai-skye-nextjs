import * as React from "react";
import { SubHeader } from "@/components/layout";
import { PrivacySection } from "./sections";

export const PrivacyPolicyPageModule: React.FC = (): React.ReactElement => {
  return (
    <div data-testid="privacy-policy-page-module">
      <SubHeader title="Kebijakan Privasi" />
      <PrivacySection />
    </div>
  );
};
