import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { UsersListSection } from "./sections";

export const UsersPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Pengguna">
      <UsersListSection />
    </DashboardContentContainer>
  );
};
