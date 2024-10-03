"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CategoryBadge } from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const documentData: TDocument[] = [
  {
    id: "1",
    title: "10 Tips Sukses Berjualan di Marketplace",
    category: "e-commerce",
    createdAt: new Date("2024-01-12T08:30:00"),
    wordUsed: 850,
  },
  {
    id: "2",
    title: "Cara Menarik Pengikut di TikTok",
    category: "tiktok",
    createdAt: new Date("2024-02-05T14:45:00"),
    wordUsed: 400,
  },
  {
    id: "3",
    title: "Panduan Lengkap Mengoptimalkan Postingan Instagram",
    category: "instagram",
    createdAt: new Date("2024-03-17T11:00:00"),
    wordUsed: 650,
  },
  {
    id: "4",
    title: "Strategi Branding untuk Toko Online",
    category: "e-commerce",
    createdAt: new Date("2024-04-10T09:15:00"),
    wordUsed: 900,
  },
  {
    id: "5",
    title: "Konten TikTok yang Mengundang Interaksi",
    category: "tiktok",
    createdAt: new Date("2024-05-25T16:30:00"),
    wordUsed: 500,
  },
  {
    id: "6",
    title: "Konten Instagram yang Mengundang Interaksi",
    category: "instagram",
    createdAt: new Date("2024-05-25T16:30:00"),
    wordUsed: 666,
  },
];

export type TDocument = {
  id: string;
  title: string;
  category: "e-commerce" | "tiktok" | "instagram";
  createdAt: Date;
  wordUsed: number;
};

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
