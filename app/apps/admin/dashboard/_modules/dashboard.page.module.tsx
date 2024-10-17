import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { CardsSection, ChartsSection, TransactionSection } from "./sections";
import { getTotalUsers, getTotalVisitors } from "@/libs/actions";

export const DashboardAdminPageModule: React.FC =
  async (): Promise<React.ReactElement> => {
    const [totalUsers, visitors] = await Promise.all([
      getTotalUsers(),
      getTotalVisitors(),
    ]);

    return (
      <DashboardContentContainer pageTitle="Dashboard">
        <div className="space-y-8">
          <CardsSection
            totalUsers={totalUsers}
            totalVisitors={visitors.desktop + visitors.mobile}
          />
          <ChartsSection />
          <TransactionSection />
        </div>
      </DashboardContentContainer>
    );
  };
