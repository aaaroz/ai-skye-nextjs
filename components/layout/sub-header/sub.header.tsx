import * as React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface SubHeaderProps {
  title: string;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  title,
}): React.ReactElement => {
  return (
    <header className="md:mt-8 py-16 bg-gradient-to-l from-sky-800 via-sky-100 to-sky-50">
      <div className="container space-y-4 md:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>
        <Breadcrumb pageName={title} />
      </div>
    </header>
  );
};
