"use client";
import * as React from "react";
import Link from "next/link";
import logoWhite from "@/public/logo-white.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { ListItem } from "./list-item";
import { AuthButton } from "./auth.button";
import { SheetNavigation } from "./sheet.navigation";
import { cn } from "@/libs/utils";
import { Logo } from "@/components/common/logo";
import Image from "next/image";

export const Navbar: React.FC = (): React.ReactElement => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "container sticky top-0 sm:top-5 bg-transparent w-full z-20 h-20 flex items-center justify-between sm:rounded-full transition-all duration-300",
        {
          "bg-background shadow-xl": isScrolled,
        }
      )}
    >
      <Logo />
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/#pricing" legacyBehavior passHref>
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
                      href="/features"
                      title="Semua Fitur AI"
                      className="flex h-full w-full select-none flex-col gap-2 justify-end rounded-md text-white bg-gradient-to-b from-neutral-50 via-sky-600 to-sky-800 p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Image
                        src={logoWhite}
                        alt="logo-kontenkilat"
                        className="size-7"
                      />
                      <span className="font-semibold text-2xl">
                        KontenKilat.id
                      </span>
                      <p className="text-sm font-normal leading-tight text-white">
                        Manfaatkan AI Bersama Kami, Untuk Masa Depan yang Lebih
                        Baik.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/features?category=instagram" title="Instagram">
                  Buat konten instagram yang lebih menarik dan variatif.
                </ListItem>
                <ListItem href="/features?category=tiktok" title="TikTok">
                  Dapatkan ide konten tiktok yang lebih menarik dengan mudah.
                </ListItem>
                <ListItem
                  href="/features?category=ecommerce"
                  title="E-Commerce"
                >
                  Dapatkan ide konten menarik untuk keperluan e-commerce mu.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#FAQs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden md:block">
        <AuthButton />
      </div>
      <div className="block md:hidden">
        <SheetNavigation />
      </div>
    </header>
  );
};
