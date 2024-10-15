import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { DocumentListSection } from "./sections";

export const DocumentsPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Dokumen">
      <DocumentListSection />
    </DashboardContentContainer>
  );
};
