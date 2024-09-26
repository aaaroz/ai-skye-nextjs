import * as React from "react";
import { FeatureSection, HeroSection, StepSection } from "./sections";

export const LandingPageModule: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <HeroSection />
      <FeatureSection />
      <StepSection />
    </React.Fragment>
  );
};
