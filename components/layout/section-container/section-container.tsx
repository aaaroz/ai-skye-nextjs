import * as React from "react";
import { cn } from "@/libs/utils";

interface SectionContainerProps {
  className?: string;
  children: React.ReactNode;
}
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
}): React.ReactElement => {
  return (
    <section
      className={cn(
        "container py-8 md:py-16 space-y-6 md:space-y-8",
        className
      )}
    >
      {children}
    </section>
  );
};
