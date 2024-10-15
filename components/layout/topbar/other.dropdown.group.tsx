"use client";
import * as React from "react";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { MessageCircleIcon, MessageSquareTextIcon } from "lucide-react";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShortcutDialogTrigger } from "./shortcut.dialog.trigger";

export const OtherDropdownGroup: React.FC = (): React.ReactElement => {
  return (
    <DropdownMenuGroup>
      <div className="relative w-full">
        <ShortcutDialogTrigger />
      </div>
      <div className="relative w-full">
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative w-full flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              <MessageSquareTextIcon className="mr-2 h-4 w-4" />
              <span>Dukungan</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ada Keluhan atau Dukungan?</DialogTitle>
              <DialogDescription>
                Kami siap menerima keluhan dan dukungan anda, silahkan hubungi
                Customer Service kami untuk menyampaikan keluhan dan dukungan
                anda. Anda bisa langsung hubungi nomor WhatsApp ini :{" "}
                <strong>+62812131415178 (CS KontenKilat)</strong> atau klik
                tombol dibawah untuk membuat pesan via WhatsApp Web.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Link
                href="https://api.whatsapp.com/send?phone=081213294383"
                title="buka whatsapp web"
                target="_blank"
              >
                <Button className="bg-green-600 hover:bg-green-600/80">
                  <MessageCircleIcon size={18} className="mr-2" /> WhatsApp Web
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DropdownMenuGroup>
  );
};
