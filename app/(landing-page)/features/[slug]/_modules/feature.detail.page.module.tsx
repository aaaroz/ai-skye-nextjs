import * as React from "react";
import { SubHeader } from "@/components/layout";
import { Feature } from "@/libs/entities";
import { DescriptionSection, StepSection } from "./sections";

const mockData: Feature = {
  id: "",
  featuresname: "",
  deskripsi: "",
  subdeskripsi: "",
  categoryname: "",
  slug: "",
  data: [],
};
interface FeatureDetailPageModuleProps {
  featureData: Feature;
}
export const FeatureDetailPageModule: React.FC<
  FeatureDetailPageModuleProps
> = ({ featureData }) => {
  if (featureData) {
    const { id, featuresname, deskripsi, subdeskripsi, categoryname, data } =
      featureData;

    mockData.id = id;
    mockData.featuresname = featuresname;
    mockData.deskripsi = deskripsi;
    mockData.subdeskripsi = subdeskripsi;
    mockData.categoryname = categoryname;
    mockData.data = data;
  }
  return (
    <div data-testid="feature-detail-page-module">
      <SubHeader title={mockData.featuresname} />
      <DescriptionSection
        description={mockData.deskripsi}
        headline={mockData.subdeskripsi}
      />
      <StepSection title={mockData.featuresname} />
    </div>
  );
};
