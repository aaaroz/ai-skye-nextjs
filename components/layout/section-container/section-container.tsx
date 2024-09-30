import * as React from "react";
import { cn } from "@/libs/utils";

type SectionContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  ...props
}): React.ReactElement => {
  return (
    <section
    {...props}
      className={cn(
        "container py-8 md:py-16 space-y-6 md:space-y-8",
        className
      )}
    >
      {children}
    </section>
  );
};
