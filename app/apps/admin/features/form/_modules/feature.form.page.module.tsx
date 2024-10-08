import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { FormSection } from "./sections";

export const FeatureFormPageModule: React.FC<{ id?: string }> = ({
  id,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Form AI Generator" withBackButton>
      <FormSection id={id} />
    </DashboardContentContainer>
  );
};
