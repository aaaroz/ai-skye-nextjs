import * as React from "react";
import { Metadata, NextPage } from "next";
import { DocumentDetailPageModule } from "./_modules";
import { getDocumentById } from "@/libs/actions";

export const runtime = "edge";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const documentData = await getDocumentById(id);
  return {
    title: `${documentData.title}` || "Dokumen",
  };
};

const DocumentDetailPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}): React.ReactElement => {
  return <DocumentDetailPageModule id={id} />;
};

export default DocumentDetailPage;
