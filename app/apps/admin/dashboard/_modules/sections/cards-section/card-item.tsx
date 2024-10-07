import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCardItemProps } from "./type";
import { cn } from "@/libs/utils";

export const CardItem: React.FC<TCardItemProps> = ({
  title,
  count,
  icon,
  desc,
  isHighlighted,
}): React.ReactElement => {
  return (
    <Card
      className={cn("shadow", {
        "bg-gradient-to-tr from-sky-800 via-sky-600 to-transparent":
          isHighlighted,
      })}
    >
      <CardHeader className="px-4 pt-6 pb-2">
        <div className="flex justify-between items-center">
          <CardTitle
            className={cn("text-lg md:text-xl", {
              "text-background": isHighlighted,
            })}
          >
            {title}
          </CardTitle>
          <div className="p-1.5 rounded bg-sky-50 text-sky-600">{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <h1
          className={cn("text-2xl md:text-3xl font-bold", {
            "text-background": isHighlighted,
          })}
        >
          {count}
        </h1>
      </CardContent>
      <CardFooter className="px-4 pb-6 ">
        <CardDescription className={cn({ "text-background": isHighlighted })}>
          {desc}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
