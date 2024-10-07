"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils";

export const transactionData: TTransaction[] = [
  {
    orderId: "ORD123456",
    status: "pending",
    createdAt: new Date("2024-09-15T10:30:00Z"),
    name: "John Doe",
    count: 9000,
  },
  {
    orderId: "ORD123457",
    status: "settled",
    createdAt: new Date("2024-09-10T14:00:00Z"),
    name: "Jane Smith",
    count: 9000,
  },
  {
    orderId: "ORD123458",
    status: "failed",
    createdAt: new Date("2024-09-12T09:45:00Z"),
    name: "Alice Johnson",
    count: 9000,
  },
  {
    orderId: "ORD123459",
    status: "pending",
    createdAt: new Date("2024-09-20T13:15:00Z"),
    name: "Bob Williams",
    count: 9000,
  },
  {
    orderId: "ORD123460",
    status: "settled",
    createdAt: new Date("2024-09-05T11:00:00Z"),
    name: "Charlie Brown",
    count: 9000,
  },
];

export type TTransaction = {
  orderId: string;
  status: "pending" | "settled" | "failed";
  createdAt: Date;
  name: string;
  count: number;
};

export const transactionColumns: ColumnDef<TTransaction>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start whitespace-normal px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value =
        row.getValue("status") === "settled"
          ? "Berhasil"
          : row.getValue("status") === "pending"
          ? "Ditunda"
          : "Gagal";
      const badgeClassName = {
        "bg-green-100 text-green-600": value === "Berhasil",
        "bg-yellow-100 text-yellow-600": value === "Ditunda",
        "bg-red-100 text-red-600": value === "Gagal",
      };
      return (
        <Badge variant="default" className={cn(badgeClassName)}>
          {value}
        </Badge>
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
    accessorKey: "count",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start whitespace-normal px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jumlah
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
];
