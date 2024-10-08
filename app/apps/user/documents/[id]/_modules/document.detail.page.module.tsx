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
        createdAt={data.createdAt}
        wordUsed={data.wordUsed}
        title={data.title}
        text={data.text}
      />
    </DashboardContentContainer>
  );
};
