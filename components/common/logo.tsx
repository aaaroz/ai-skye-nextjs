"use client";
import * as React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

interface LogoProps {
  variant?: "default" | "white";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
}): React.ReactElement => {
  const pathname = usePathname();
  const isDashboardApps = pathname.split("/").includes("apps");
  return (
    <Link
      href="/"
      title="KontenKilat.id"
      className={cn(
        "flex items-center gap-2.5 focus-visible:outline-transparent",
        {
          "text-background": variant === "white",
        }
      )}
    >
      <Image
        src={variant === "default" ? logo : logoWhite}
        alt="konten kilat"
        className="size-auto"
      />
      <span
        className={cn(
          "font-semibold text-2xl scale-100 transition-all duration-200",
          {
            "text-lg sm:text-2xl": isDashboardApps,
          }
        )}
      >
        KontenKilat.id
      </span>
    </Link>
  );
};
