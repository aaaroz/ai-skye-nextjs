import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CategoryBadge } from "@/components/dashboard-page";
import { categories, dashboardUserRoute } from "@/libs/entities";
import { cn } from "@/libs/utils";

interface FeatureCardProps {
  slug: string;
  title: string;
  headline: string;
  category: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  slug,
  title,
  headline,
  category,
}): React.ReactElement => {
  const categoryData = categories.find(
    (item) => item.name === category.toLowerCase()
  );
  const backgroundTitle = {
    "from-sky-600 via-sky-100 to-transparent":
      category.toLowerCase() === "tiktok",
    "from-rose-600 via-rose-100 to-transparent":
      category.toLowerCase() === "instagram",
    "from-orange-600 via-orange-100 to-transparent":
      category.toLowerCase() === "ecommerce",
  };
  return (
    <Link href={`${dashboardUserRoute}features/${slug}`} title={title}>
      <Card className="w-full shadow-lg">
        <CardHeader className="w-full p-4">
          <div className={cn("py-2 rounded bg-gradient-to-l", backgroundTitle)}>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
        <p className="text-base text-muted-foreground line-clamp-3">{headline}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between items-center p-4 pt-0">
          <CategoryBadge
            variant={
              categoryData?.name === "tiktok"
                ? "tiktok"
                : categoryData?.name === "instagram"
                ? "instagram"
                : "ecommerce"
            }
          >
            {categoryData?.title}
          </CategoryBadge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export const FeatureCardSkeleton: React.FC = () => {
  return (
    <div className="w-full shadow-lg p-4 rounded">
      <div className="w-full">
        <div className="h-12 w-full rounded animate-pulse bg-slate-300"></div>
      </div>
      <div>
        <div className="h-5 w-3/4 rounded animate-pulse bg-slate-300 my-2"></div>
        <div className="h-5 w-2/3 rounded animate-pulse bg-slate-300"></div>
      </div>
      <div className="flex flex-nowrap justify-between items-center pt-2 gap-2">
        <div className="h-8 w-1/2 rounded animate-pulse bg-slate-300"></div>
        <div className="h-8 w-1/2 rounded animate-pulse bg-slate-300"></div>
      </div>
    </div>
  );
};
