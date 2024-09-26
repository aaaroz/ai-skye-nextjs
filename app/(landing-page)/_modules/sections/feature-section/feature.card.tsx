import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<
  FeatureCardProps
> = ({title,description}): React.ReactElement => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="w-full ">
        <div className="py-2 rounded bg-gradient-to-l from-sky-800 via-sky-100 to-transparent">
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="link" size="sm" className="px-0">
          Pelajari Selengkapnya <ArrowRight className="ml-0.5 size-4" />
        </Button>
        <Button variant="default" size="sm">
          Coba Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
};
