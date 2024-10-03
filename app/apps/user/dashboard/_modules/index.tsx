import * as React from "react";
import { GraphicSection, TokenSection } from "./sections";
import { DashboardContentContainer } from "@/components/layout";

export const DashboardUserPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Dashboard">
      <div className="space-y-8">
        <TokenSection />
        <GraphicSection />
      </div>
    </DashboardContentContainer>
  );
};
