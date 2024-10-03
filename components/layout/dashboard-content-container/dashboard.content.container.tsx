import * as React from "react";

interface DashboardContentContainerProps {
  pageTitle: string;
  children: React.ReactNode;
}

export const DashboardContentContainer: React.FC<
  DashboardContentContainerProps
> = ({ pageTitle, children }): React.ReactElement => {
  return (
    <div className="py-6 space-y-4">
      <h1 className="text-xl font-bold capitalize">{pageTitle}</h1>
      {children}
    </div>
  );
};
