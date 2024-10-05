import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { TopUpSection } from "./_modules/sections";

const PaymentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Pembayaran">
      <TopUpSection />
      {children}
    </DashboardContentContainer>
  );
};

export default PaymentLayout;
