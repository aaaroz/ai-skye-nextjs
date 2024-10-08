import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { CardsSection, ChartsSection, TransactionSection } from "./sections";

export const DashboardAdminPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Dashboard">
      <div className="space-y-8">
        <CardsSection />
        <ChartsSection />
        <TransactionSection />
      </div>
    </DashboardContentContainer>
  );
};
