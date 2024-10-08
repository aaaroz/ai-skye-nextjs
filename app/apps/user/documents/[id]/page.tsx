import * as React from "react";
import { NextPage } from "next";
import { DocumentDetailPageModule } from "./_modules";
import { documentData, TDocument } from "@/libs/entities";

export const runtime = "edge";

const DocumentDetailPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}): React.ReactElement => {
  const data = documentData.find((item) => item.id === id);
  return <DocumentDetailPageModule data={data as TDocument} />;
};

export default DocumentDetailPage;
