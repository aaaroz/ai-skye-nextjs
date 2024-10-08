import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import {
  FeatureCategorySection,
  FeatureHeaderSection,
  FeatureListSection,
} from "./sections";
import { Loader2Icon } from "lucide-react";

export const FeaturesPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="AI Generator">
      <FeatureHeaderSection />
      <React.Suspense
        fallback={
          <section className="p-4 md:p-6 inline-flex w-full space-x-2 rounded-md overflow-auto bg-neutral-50">
            <p className="w-full text-center">
              <Loader2Icon className="animate-spin" />
              Loading...
            </p>
          </section>
        }
      >
        <FeatureCategorySection />
      </React.Suspense>
      <React.Suspense
        fallback={
          <section className="w-full py-4">
            <p>
              <Loader2Icon className="animate-spin" />
              Loading...
            </p>
          </section>
        }
      >
        <FeatureListSection />
      </React.Suspense>
    </DashboardContentContainer>
  );
};
