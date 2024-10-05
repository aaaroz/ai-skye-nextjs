"use client";
import * as React from "react";
import { SidebarMenuItem } from "./sidebar.menu.item";
import { MessageCircleIcon, MessageSquareTextIcon } from "lucide-react";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SupportButton: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <SidebarMenuItem
        title="Dukungan"
        icon={<MessageSquareTextIcon size={18} />}
        href="#"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ada Keluhan atau Dukungan?</DialogTitle>
            <DialogDescription>
              Kami siap menerima keluhan dan dukungan anda, silahkan hubungi
              Customer Service kami untuk menyampaikan keluhan dan dukungan
              anda. Anda bisa langsung hubungi nomor WhatsApp ini :{" "}
              <strong>+62812131415178 (CS KontenKilat)</strong> atau klik tombol
              dibawah untuk membuat pesan via WhatsApp Web.
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
    </>
  );
};
