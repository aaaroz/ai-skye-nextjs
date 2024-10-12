import * as React from "react";
import { NextPage } from "next";
import { DocumentDetailPageModule } from "./_modules";

const DocumentDetailPage: NextPage<{ params: { id: string } }> =  ({
  params: { id },
}): React.ReactElement => {
 
  return <DocumentDetailPageModule id={id} />;
};

export default DocumentDetailPage;
