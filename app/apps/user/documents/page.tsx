import * as React from "react";
import { NextPage } from "next";
import { DocumentsPageModule } from "./_modules";

export const runtime = "edge";

const DocumentsPage: NextPage = (): React.ReactElement => {
  return <DocumentsPageModule />;
};

export default DocumentsPage;
