import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardPromptExampleProps {
  name: string;
  prompt: string;
  productName: string;
  category: string;
}
export const CardPromptExample: React.FC<CardPromptExampleProps> = ({
  name,
  prompt,
  productName,
  category,
}): React.ReactElement => {
  return (
    <Card className="p-2 space-y-1">
      <CardHeader className="p-0">
        <CardTitle className="text-xs font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-xs">
          {prompt} <code>{productName}</code>
        </p>
      </CardContent>
      <CardFooter className="p-0">
        <Badge variant="secondary">{category}</Badge>
      </CardFooter>
    </Card>
  );
};
