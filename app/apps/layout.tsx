import { FC, ReactElement, ReactNode } from "react";
import { DashboardContainer, Sidebar, Topbar } from "@/components/layout";
import {
  AdminDashboardContextProvider,
  ToggleSidebarCollapseContextProvider,
} from "@/libs/context";

const DashboardLayout: FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return (
    <ToggleSidebarCollapseContextProvider>
      <main className="w-full min-h-screen relative">
        <Topbar />
        <Sidebar />
        <AdminDashboardContextProvider>
          <DashboardContainer>{children}</DashboardContainer>
        </AdminDashboardContextProvider>
      </main>
    </ToggleSidebarCollapseContextProvider>
  );
};

export default DashboardLayout;
