import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { TFeature, TFeatureCategory } from "@/libs/entities";
import {
  FeatureFormSection,
  FeatureHeaderSection,
  FeatureResultSection,
} from "./sections";

interface FeatureAIPageModuleProps {
  data: TFeature | undefined; //use undefined for dummy data
}
export const FeaturesAIPageModule: React.FC<FeatureAIPageModuleProps> = ({
  data,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="AI Generator">
      <FeatureHeaderSection
        title={data?.title as string}
        description={data?.description as string}
        category={data?.category as TFeatureCategory}
        headline={data?.headline as string}
      />
      <div className="flex flex-col lg:flex-row gap-6 py-4">
        <FeatureFormSection />
        <FeatureResultSection />
      </div>
    </DashboardContentContainer>
  );
};
