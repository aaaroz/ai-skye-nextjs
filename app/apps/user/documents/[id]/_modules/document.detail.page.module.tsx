import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { DocumentDetailSection } from "./sections";
import { TDocument } from "@/libs/entities";

interface DocumentDetailPageProps {
  data: TDocument;
}
export const DocumentDetailPageModule: React.FC<DocumentDetailPageProps> = ({
  data,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Dokumen" withBackButton>
      <DocumentDetailSection
        id={data.id}
        category={data.category}
        timestamp={data.timestamp}
        tokensUsed={data.tokensUsed}
        title={data.title}
        response={data.response}
      />
    </DashboardContentContainer>
  );
};
