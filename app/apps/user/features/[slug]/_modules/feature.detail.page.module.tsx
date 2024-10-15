import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { Feature, TFeatureCategory, TPrompt } from "@/libs/entities";
import {
  FeatureFormSection,
  FeatureHeaderSection,
  FeatureResultSection,
} from "./sections";

interface FeatureAIPageModuleProps {
  data: Feature | undefined; //use undefined for dummy data
}
export const FeaturesAIPageModule: React.FC<FeatureAIPageModuleProps> = ({
  data,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="AI Generator" withBackButton>
      <FeatureHeaderSection
        title={data?.featuresname as string}
        description={data?.deskripsi as string}
        category={data?.categoryname as TFeatureCategory}
        headline={data?.subdeskripsi as string}
      />
      <div className="flex flex-col lg:flex-row gap-6 py-4">
        <FeatureFormSection featureName={data?.featuresname as string} promptsData={data?.data as TPrompt[]} />
        <FeatureResultSection />
      </div>
    </DashboardContentContainer>
  );
};
