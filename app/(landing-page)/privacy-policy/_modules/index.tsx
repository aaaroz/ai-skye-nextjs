import * as React from "react";
import { SubHeader } from "@/components/layout";
import { PrivacySection } from "./sections";

export const PrivacyPolicyPageModule: React.FC = (): React.ReactElement => {
  return (
    <>
      <SubHeader title="Kebijakan Privasi" />
      <PrivacySection />
    </>
  );
};
