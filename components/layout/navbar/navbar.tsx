import Image from "next/image";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import Link from "next/link";
import { ListItem } from "./list-item";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = (): React.ReactElement => {
  return (
    <header className="2xl:container sticky top-0 bg-background px-24 w-full z-20 h-20 flex items-center justify-between">
      <Image src="/logo.svg" alt="konten kilat" width={169} height={32} />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Harga
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Fitur AI</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col gap-2 justify-end rounded-md text-white bg-gradient-to-b from-neutral-50 via-sky-600 to-sky-800 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/logo-white.svg"
                        alt="konten kilat"
                        width={169}
                        height={32}
                      />
                      <p className="text-sm font-normal leading-tight text-white">
                        Manfaatkan AI Bersama Kami, Untuk Masa Depan yang Lebih
                        Baik.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="Shopee">
                  Buat konten instagram yang lebih menarik dan variatif.
                </ListItem>
                <ListItem href="#" title="TikTok">
                  Dapatkan ide konten tiktok yang lebih menarik dengan mudah.
                </ListItem>
                <ListItem href="#" title="E-Commerce">
                  Dapatkan ide konten menarik untuk keperluan e-commerce mu.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-1 items-center">
        <Button variant="ghost">Masuk</Button>
        <Button>Daftar</Button>
      </div>
    </header>
  );
};
