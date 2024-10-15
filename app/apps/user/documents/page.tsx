import * as React from "react";
import { DocumentsPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Semua Dokumen",
};


const DocumentsPage: NextPage = (): React.ReactElement => {
  return <DocumentsPageModule />;
};

export default DocumentsPage;
