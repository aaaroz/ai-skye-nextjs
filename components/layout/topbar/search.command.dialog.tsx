"use client";

import * as React from "react";
import {
  CpuIcon,
  FileIcon,
  FolderIcon,
  SearchIcon,
  Settings,
  User,
  X,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  dashboardAdminMenuItems,
  dashboardUserAccountItems,
  dashboardUserMenuItems,
  dashboardUserRoute,
  documentData,
  dummyFeatures,
} from "@/libs/entities";
import { useRouter } from "next/navigation";
import { useProfileData } from "@/libs/hooks";
import { cn } from "@/libs/utils";

export const SearchCommandDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { profileData } = useProfileData();
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setIsOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="flex md:justify-between text-sm md:w-[280px] h-8 px-0 md:px-4 text-muted-foreground bg-neutral-100/60 border-neutral-200 hover:bg-neutral-100"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <SearchIcon size={16} className="md:hidden" />
        <span className="sr-only md:not-sr-only"> Cari sesuatu... </span>
        <kbd className="hidden md:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border border-sky-200 bg-sky-100 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Cari sesuatu..." />
        <CommandList>
          <CommandEmpty>Hasil tidak ditemukan.</CommandEmpty>
          <CommandGroup heading="Links">
            {dashboardUserMenuItems.map(({ title, href }) => (
              <CommandItem
                key={href}
                value={title}
                title={title}
                onSelect={() => runCommand(() => router.push(href))}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {title}
              </CommandItem>
            ))}
            <CommandItem
              value="Top up Kata"
              title="Top up Kata"
              onSelect={() =>
                runCommand(() =>
                  router.push(dashboardUserRoute.concat("payment/top-up"))
                )
              }
            >
              <FileIcon className="mr-2 h-4 w-4" />
              <span>Top up Kata</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="AI Generator">
            {dummyFeatures.map(({ title, id }) => (
              <CommandItem
                key={id}
                value={title}
                title={title}
                onSelect={() =>
                  runCommand(() =>
                    router.push(dashboardUserRoute.concat(`features/${id}`))
                  )
                }
              >
                <CpuIcon className="mr-2 h-4 w-4" />
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Dokumen saya">
            {documentData.length > 0 ? (
              documentData.map(({ title, id }) => (
                <CommandItem
                  key={id}
                  value={title}
                  title={title}
                  onSelect={() =>
                    runCommand(() =>
                      router.push(dashboardUserRoute.concat(`documents/${id}`))
                    )
                  }
                >
                  <FolderIcon className="mr-2 h-4 w-4" />
                  <span>{title}</span>
                </CommandItem>
              ))
            ) : (
              <CommandItem value="Belum ada dokumen" title="Belum ada dokumen">
                <X className="mr-2 h-4 w-4" />
                <span>Belum ada dokumen</span>
              </CommandItem>
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            {dashboardUserAccountItems.map(({ title, href }) => (
              <CommandItem
                key={href}
                value={title}
                title={title}
                onSelect={() => runCommand(() => router.push(href))}
              >
                <User className="mr-2 h-4 w-4" />
                {title}
              </CommandItem>
            ))}
            <CommandItem
              value="Pengaturan Akun"
              title="pengaturan akun"
              onSelect={() =>
                runCommand(() =>
                  router.push(dashboardUserRoute.concat("profile/settings"))
                )
              }
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Pengaturan Akun</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {/* make this group hidden when role is not admin */}
          <CommandGroup
            heading="Administrator"
            className={cn({ hidden: profileData?.role === "user" })}
          >
            {dashboardAdminMenuItems.map(({ title, href }) => (
              <CommandItem
                key={href}
                value={`Administrator ${title}`}
                title={`Administrator ${title}`}
                onSelect={() => runCommand(() => router.push(href))}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
