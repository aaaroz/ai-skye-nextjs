import * as React from "react";
import { FeatureCard } from "./feature.card";
import { dummyFeatures } from "@/libs/entities";

const dummyFeaturesEcommerce = dummyFeatures.filter(
  (feature) => feature.category === "e-commerce"
);

export const FeaturesEcommerce = () => {
  return (
    <>
      {dummyFeaturesEcommerce.map(({ title, headline }, index) => (
        <FeatureCard key={index} title={title} headline={headline} />
      ))}
    </>
  );
};
