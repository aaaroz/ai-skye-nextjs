import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react";

interface CardFeatureExampleProps {
  title: string;
  description: string;
  category: string;
}

export const CardFeatureExample: React.FC<CardFeatureExampleProps> = ({
  title,
  description,
  category,
}): React.ReactElement => {
  return (
    <Card className="w-full shadow-lg p-2 space-y-2">
      <CardHeader className="w-full p-0">
        <div className="py-2 rounded bg-gradient-to-l from-sky-800 via-sky-100 to-transparent">
          <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-0">
        <Badge className="px-2 text-xs bg-sky-100 text-sky-600 hover:bg-sky-100/50">
          {category}
        </Badge>
      </CardFooter>
    </Card>
  );
};
