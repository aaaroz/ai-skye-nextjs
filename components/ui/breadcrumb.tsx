"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { removePath } from "@/libs/utils";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  pageName?: string;
  separator?: React.ReactNode;
}

const linkClassName =
  "text-sm sm:text-base font-medium transition-colors duration-200 text-sky-800 hover:text-sky-700";
const pageNameClassName = "text-sm sm:text-base font-medium text-foreground";

const Separator = <p className="text-2xl">»</p>;
const Breadcrumb = ({ pageName, separator, ...props }: BreadcrumbProps) => {
  const pathname = usePathname();

  const arrayPathname = pathname?.split("/").filter(Boolean);

  let arrayPath = arrayPathname;

  if (arrayPathname?.includes("search")) {
    arrayPath = removePath(arrayPathname, "search");
  }

  return (
    <div
      className="flex flex-wrap items-center space-x-2 capitalize text-sm"
      {...props}
    >
      <Link href="/" className={linkClassName}>
        Beranda
      </Link>
      {separator || Separator}

      {arrayPath?.map((item, index) => (
        <React.Fragment key={index}>
          {index !== arrayPath.length - 1 ? (
            <Link
              href={
                item !== "dashboard"
                  ? `/${arrayPathname.slice(0, index + 1).join("/")}`
                  : `/${arrayPathname.slice(0, index + 2).join("/")}`
              }
              key={index}
              className={linkClassName}
            >
              {item === "features" ? "Fitur AI" : item}
            </Link>
          ) : pageName ? (
            <p className={pageNameClassName}>{pageName}</p>
          ) : (
            <p key={index} className={pageNameClassName}>
              {item}
            </p>
          )}

          {index !== arrayPath.length - 1 ? (
            <>{separator || Separator}</>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export { Breadcrumb };
