import * as React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";
import { cn } from "@/libs/utils";

interface LogoProps {
  variant?: "default" | "white";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
}): React.ReactElement => {
  return (
    <Link
      href="/"
      title="KontenKilat.id"
      className={cn("flex items-center gap-2.5", {
        "text-background": variant === "white",
      })}
    >
      <Image
        src={variant === "default" ? logo : logoWhite}
        alt="konten kilat"
        className="size-auto"
      />
      <span className="font-semibold text-2xl">KontenKilat.id</span>
    </Link>
  );
};
