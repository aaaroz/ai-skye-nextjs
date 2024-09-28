import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "./auth.button";
import { Logo } from "@/components/common/logo";

export const SheetNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-5 border-b border-neutral-200">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Sheet Navigation
          </SheetDescription>
        </SheetHeader>
        <div className="py-5 space-y-8">
          <div className="w-full flex justify-center">
            <AuthButton />
          </div>
          <ul className="space-y-1">
            <li>
              <Link href="#">
                <Button variant="ghost" className="w-full">
                  Beranda
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button variant="ghost" className="w-full">
                  Harga
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button variant="ghost" className="w-full">
                  Feature AI
                </Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button variant="ghost" className="w-full">
                  FAQs
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
