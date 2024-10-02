import { FC, ReactElement, ReactNode } from "react";
import { Sidebar, Topbar } from "@/components/layout";
import { ToggleSidebarCollapseContextProvider } from "@/libs/context";

const DashboardLayout: FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return (
    <ToggleSidebarCollapseContextProvider>
      <main className="w-full min-h-screen">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <article className="w-full px-8 py-6 bg-neutral-100">
            {children}
          </article>
        </div>
      </main>
    </ToggleSidebarCollapseContextProvider>
  );
};

export default DashboardLayout;
