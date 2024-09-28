"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { FeatureTabs } from "@/components/landing-page";
import { TFeatureCategory } from "@/libs/entities";
import { SectionContainer } from "@/components/layout";

export const FeaturesSection: React.FC = (): React.ReactElement => {
  const searchParams = useSearchParams();
  let defaultValue: TFeatureCategory = "all";
  if (searchParams?.get("category") === "instagram") {
    defaultValue = "instagram";
  } else if (searchParams?.get("category") === "tiktok") {
    defaultValue = "tiktok";
  } else if (searchParams?.get("category") === "ecommerce") {
    defaultValue = "ecommerce";
  }

  return (
    <SectionContainer>
      <FeatureTabs defaultValue={defaultValue} showAllFeatures />
    </SectionContainer>
  );
};
