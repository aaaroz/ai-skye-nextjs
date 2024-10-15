import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { FormSection } from "./sections";
import { LoaderIcon } from "lucide-react";

export const FeatureFormPageModule: React.FC = (): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Form AI Generator" withBackButton>
      <React.Suspense
        fallback={
          <div className="py-16 w-full ">
            <span className="flex w-full items-center justify-center text-center">
              <LoaderIcon className="size-6 animate-spin" /> Loading...
            </span>
          </div>
        }
      >
        <FormSection />
      </React.Suspense>
    </DashboardContentContainer>
  );
};
