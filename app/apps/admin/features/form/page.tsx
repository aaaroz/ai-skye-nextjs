import * as React from "react";
import { NextPage } from "next";
import { FeatureFormPageModule } from "./_modules";

export const runtime = "edge";

const FeatureFormPage: NextPage<{
  searchParams: { editId?: string };
}> = ({ searchParams: { editId } }): React.ReactElement => {
  return <FeatureFormPageModule id={editId} />;
};

export default FeatureFormPage;
