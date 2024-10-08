"use client";
import * as React from "react";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Keyboard } from "lucide-react";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { dashboardUserRoute } from "@/libs/entities";

const shortcuts = [
  {
    title: "Buka/Tutup Pencarian",
    shortcut: "⌘K",
  },
  {
    title: "Buka/Tutup Sidebar",
    shortcut: "⌘B",
  },
  {
    title: "Buka/Tutup Pintasan Keyboard",
    shortcut: "⌘⇧?",
  },
  {
    title: "Keluar/Logout",
    shortcut: "⌘⇦",
  },
  {
    title: "Menuju halaman Fitur AI",
    shortcut: "⌘F",
  },
];

export const ShortcutDialogTrigger: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (e.key === "?" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push(dashboardUserRoute.concat("features"));
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [router]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="relative w-full flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <Keyboard className="mr-2 h-4 w-4" />
          <span>Pintasan Keyboard</span>
          <DropdownMenuShortcut>⌘⇧?</DropdownMenuShortcut>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pintasan Keyboard</DialogTitle>
          <DialogDescription>
            Kami menyediakan beberapa pintasan keyboard untuk memudahkan anda
            saat berinteraksi dengan aplikasi kami.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ul className="flex flex-col w-full justify-start py-4 space-y-2">
          {shortcuts.map(({ title, shortcut }, index) => (
            <li
              className="list-disc inline-flex relative text-sm gap-2"
              key={index}
            >
              <span>{title}</span>
              <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
            </li>
          ))}
        </ul>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Tutup</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
