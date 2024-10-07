"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { TFeature } from "@/libs/entities";
import { FeatureGroup } from "./feature.group";
import { useFeatureDashboard } from "@/libs/hooks";
import { cn } from "@/libs/utils";

export const FeatureListSection: React.FC = (): React.ReactElement => {
  const { features } = useFeatureDashboard();
  const featuresTiktok = features?.filter(
    (feature) => feature.category === "tiktok"
  );
  const featuresInstagram = features?.filter(
    (feature) => feature.category === "instagram"
  );
  const featuresEcommerce = features?.filter(
    (feature) => feature.category === "ecommerce"
  );
  const searchParams = useSearchParams();
  const getVisibleCategory = searchParams?.get("category");
  return (
    <section className="w-full pt-4">
      <FeatureGroup
        title="TikTok & TikTok Shop"
        description="Dapatkan ide menarik untuk membuat konten tiktok dan tiktok shop anda dengan mudah menggunakan AI"
        features={featuresTiktok as TFeature[]}
        className={cn({
          hidden: getVisibleCategory !== "tiktok",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
      <FeatureGroup
        title="Instagram"
        description="Dapatkan ide menarik untuk membuat konten instagram anda dengan mudah menggunakan AI"
        features={featuresInstagram as TFeature[]}
        className={cn({
          hidden: getVisibleCategory !== "instagram",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
      <FeatureGroup
        title="E-Commerce"
        description="Dapatkan ide menarik untuk membuat konten e-commerce anda dengan mudah menggunakan AI"
        features={featuresEcommerce as TFeature[]}
        className={cn({
          hidden: getVisibleCategory !== "ecommerce",
          block: getVisibleCategory === "all" || !getVisibleCategory,
        })}
      />
    </section>
  );
};
