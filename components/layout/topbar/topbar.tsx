import * as React from "react";
import { PlusIcon } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { SearchCommandDialog } from "./search.command.dialog";
import { ProfileDropdown } from "./profile.dropdown";
import { SidebarCollapseTrigger } from "./sidebar.collapse.trigger";

export const Topbar: React.FC = (): React.ReactElement => {
  return (
    <header className="sticky z-50 top-0 h-20 px-4 md:px-8 flex justify-between items-center bg-background shadow-md">
      <div className="flex flex-row-reverse md:flex-row items-center gap-2 sm:gap-8">
        <Logo />
        <SidebarCollapseTrigger />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1">
          <SearchCommandDialog />
          <Button
            variant="outline"
            size="icon"
            className="hidden sm:inline-flex items-center text-sm h-8 text-muted-foreground bg-neutral-100/60 border-neutral-200 hover:bg-neutral-100"
          >
            <PlusIcon size={16} />
          </Button>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
