import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createSlug } from "@/libs/utils";

interface FeatureCardProps {
  title: string;
  headline: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  headline,
}): React.ReactElement => {
  const slug = createSlug(title);
  return (
    <Card className="w-full h-fit shadow-lg">
      <CardHeader className="w-full">
        <div className="py-2 rounded bg-gradient-to-l from-sky-800 via-sky-100 to-transparent">
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground">{headline}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center">
        <Link href={`/features/${slug}`}>
          <Button variant="link" size="sm" className="px-0">
            Pelajari Selengkapnya <ArrowRight className="ml-0.5 size-4" />
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="default" size="sm">
            Coba Sekarang
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export const FeatureCardSkeleton: React.FC = () => {
  return (
    <div className="w-full shadow-lg p-4 rounded">
      <div className="w-full">
        <div className="h-6 w-[250px] rounded animate-pulse bg-slate-300"></div>
      </div>
      <div>
        <div className="h-4 w-[250px] rounded animate-pulse bg-slate-300"></div>
        <div className="h-4 w-3/4 rounded animate-pulse bg-slate-300 my-2"></div>
        <div className="h-4 w-2/3 rounded animate-pulse bg-slate-300"></div>
      </div>
      <div className="flex flex-wrap justify-between items-center pt-2">
        <div className="h-8 w-1/2 rounded animate-pulse bg-slate-300"></div>
        <div className="h-8 w-1/2 rounded animate-pulse bg-slate-300"></div>
      </div>
    </div>
  );
};
