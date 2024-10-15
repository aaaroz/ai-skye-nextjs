import * as React from "react";
import { FeatureCard, FeatureCardSkeleton } from "./feature.card";
import { Feature } from "@/libs/entities";
import { cn } from "@/libs/utils";

interface FeatureGroupProps {
  title: string;
  description: string;
  features: Feature[];
  className?: string;
}
export const FeatureGroup: React.FC<FeatureGroupProps> = ({
  title,
  description,
  features,
  className,
}): React.ReactElement => {
  return (
    <div className={cn("space-y-2 mt-6", className)}>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
        {!features ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <FeatureCardSkeleton key={index} />
            ))}
          </>
        ) : features.length === 0 ? (
          <div className="w-full col-span-1 sm:col-span-2 md:col-span-3 h-32 text-center flex items-center">
            <p>Fitur tidak ditemukan di kategori ini</p>
          </div>
        ) : (
          features?.map(
            ({ featuresname, subdeskripsi, categoryname, slug }, index) => (
              <FeatureCard
                key={index}
                slug={slug}
                title={featuresname}
                headline={subdeskripsi}
                category={categoryname}
              />
            )
          )
        )}
      </div>
    </div>
  );
};
