import * as React from "react";
import { SubHeader } from "@/components/layout";
import { TFeature } from "@/libs/entities";
import { DescriptionSection, StepSection } from "./sections";

const mockData: TFeature = {
  id: "",
  title: "",
  description: "",
  headline: "",
  category: "",
  prompts: [],
  slug: "",
};
interface FeatureDetailPageModuleProps {
  data: TFeature | undefined; //use undefined for dummy data
}
export const FeatureDetailPageModule: React.FC<
  FeatureDetailPageModuleProps
> = ({ data }) => {
  if (data) {
    const { id, title, description, headline, category, prompts, slug } = data;

    mockData.id = id;
    mockData.title = title;
    mockData.description = description;
    mockData.headline = headline;
    mockData.category = category;
    mockData.prompts = prompts;
    mockData.slug = slug;
  }
  return (
    <div data-testid="feature-detail-page-module">
      <SubHeader title={mockData.title} />
      <DescriptionSection
        description={mockData.description}
        headline={mockData.headline}
      />
      <StepSection title={mockData.title} />
    </div>
  );
};
