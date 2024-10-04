import { FC, ReactElement, ReactNode } from "react";
import { DashboardContainer, Sidebar, Topbar } from "@/components/layout";
import { FeatureDashboardContextProvider, ToggleSidebarCollapseContextProvider } from "@/libs/context";

const DashboardLayout: FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return (
    <ToggleSidebarCollapseContextProvider>
      <main className="w-full min-h-screen relative">
        <Topbar />
        <Sidebar />
        <FeatureDashboardContextProvider>
        <DashboardContainer>{children}</DashboardContainer>
        </FeatureDashboardContextProvider>
      </main>
    </ToggleSidebarCollapseContextProvider>
  );
};

export default DashboardLayout;
