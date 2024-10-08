import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { TransactionSection } from "./sections";

export const TransactionPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Transaksi">
      <TransactionSection />
    </DashboardContentContainer>
  );
};
