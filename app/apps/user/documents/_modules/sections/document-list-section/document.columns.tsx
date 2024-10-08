"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CategoryBadge } from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { TDocument } from "@/libs/entities";

export const documentColumns: ColumnDef<TDocument>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Judul Dokumen
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kategori
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <CategoryBadge variant={row.getValue("category") ?? "default"}>
          {row.getValue("category")}
        </CategoryBadge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dibuat pada
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = format(row.getValue("createdAt") as Date, "dd MMMM yyyy", {
        locale: id,
      });

      const time = format(row.getValue("createdAt") as Date, "K:mm aa", {
        locale: id,
      });
      return (
        <div className="flex flex-col">
          <strong>{date}</strong>
          <span className="text-muted-foreground">{time}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "wordUsed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start whitespace-normal px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kata yang digunakan
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
];
