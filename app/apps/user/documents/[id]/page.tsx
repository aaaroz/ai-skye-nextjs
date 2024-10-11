import * as React from "react";
import { NextPage } from "next";
import { DocumentDetailPageModule } from "./_modules";
import { TDocument } from "@/libs/entities";
import { getDocumentById } from "@/libs/actions";

export const runtime = "edge";

const DocumentDetailPage: NextPage<{ params: { id: string } }> = async ({
  params: { id },
}): Promise<React.ReactElement> => {
  const data = await getDocumentById(id);
  return <DocumentDetailPageModule data={data as TDocument} />;
};

export default DocumentDetailPage;
