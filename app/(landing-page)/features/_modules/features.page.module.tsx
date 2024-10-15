import * as React from "react";
import { SubHeader } from "@/components/layout";
import { FeaturesSection } from "./sections";
import { LoaderIcon } from "lucide-react";

export const FeaturesPageModule: React.FC = (): React.ReactElement => {
  return (
    <div data-testid="features-page-module">
      <SubHeader title="Fitur AI" />
      <React.Suspense
        fallback={
          <div className="py-16 w-full text-center">
            <span className="flex w-full items-center justify-center">
              <LoaderIcon className="size-6 animate-spin" /> Loading...
            </span>
          </div>
        }
      >
        <FeaturesSection />
      </React.Suspense>
    </div>
  );
};
