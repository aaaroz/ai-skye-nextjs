"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { categories, TFeatureCategory } from "@/libs/entities";

export const FeatureCategorySection: React.FC = (): React.ReactElement => {
  const searchParams = useSearchParams();
  let activeState: TFeatureCategory = "all";
  if (searchParams?.get("category") === "instagram") {
    activeState = "instagram";
  } else if (searchParams?.get("category") === "tiktok") {
    activeState = "tiktok";
  } else if (searchParams?.get("category") === "ecommerce") {
    activeState = "ecommerce";
  }
  return (
    <section className="p-4 md:p-6 inline-flex w-full space-x-2 rounded-md overflow-auto bg-neutral-50">
      {categories.map(({ title, name }, index) => (
        <Link key={index} href={`?category=${name}`} title={title}>
          <Button variant={activeState === name ? "default" : "ghost"}>
            {title}
          </Button>
        </Link>
      ))}
    </section>
  );
};
