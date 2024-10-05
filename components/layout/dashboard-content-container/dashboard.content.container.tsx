import * as React from "react";
import { cn } from "@/libs/utils";

interface DashboardContentContainerProps {
  pageTitle: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardContentContainer: React.FC<
  DashboardContentContainerProps
> = ({ pageTitle, children, className }): React.ReactElement => {
  return (
    <div className={cn("py-6 space-y-4", className)}>
      <h1 className="text-lg font-bold capitalize">{pageTitle}</h1>
      {children}
      <p className="text-sm w-full text-center">
        Copyright © 2024 KontenKilat.id Hak cipta dilindungi.
      </p>
    </div>
  );
};
