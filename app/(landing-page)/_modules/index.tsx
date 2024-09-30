import * as React from "react";
import {
  FAQSection,
  FeatureSection,
  HeroSection,
  PricingSection,
  StepSection,
} from "./sections";

export const LandingPageModule: React.FC = (): React.ReactElement => {
  return (
    <div data-testid="landing-page-module" className="space-y-9 md:space-y-0">
      <HeroSection />
      <FeatureSection />
      <StepSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};
