import * as React from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { SearchCommandDialog } from "./search.command.dialog";
import { ProfileDropdown } from "./profile.dropdown";
import { SidebarCollapseTrigger } from "./sidebar.collapse.trigger";
import { dashboardUserRoute } from "@/libs/entities";
import { ShortcutDialogTrigger } from "./shortcut.dialog.trigger";
import { LogoutDialogTrigger } from "./logout.dialog.trigger";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export const Topbar: React.FC = async (): Promise<React.ReactElement> => {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <header className="sticky z-50 top-0 h-20 px-4 md:px-8 flex justify-between items-center bg-background shadow-md">
      <div className="flex flex-row-reverse md:flex-row items-center gap-2 sm:gap-8">
        <Logo />
        <SidebarCollapseTrigger />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1">
          <SearchCommandDialog />
          <div className="sr-only">
            <ShortcutDialogTrigger />
            <LogoutDialogTrigger />
          </div>
          <Link
            title="Buat ide konten baru"
            href={dashboardUserRoute.concat("features")}
            className="hidden sm:inline-flex"
          >
            <Button
              variant="outline"
              size="icon"
              className="items-center text-sm h-8 text-muted-foreground bg-neutral-100/60 border-neutral-200 hover:bg-neutral-100"
            >
              <PlusIcon size={16} />
            </Button>
          </Link>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
