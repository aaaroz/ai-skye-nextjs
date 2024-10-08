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
    orderId: "ORD123456789",
    status: "pending",
    createdAt: new Date("2024-10-01T10:00:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 5",
    paymentMethod: "QRIS",
    total: 50000, // 5 x 10.000
  },
  {
    orderId: "ORD987654321",
    status: "settled",
    createdAt: new Date("2024-09-28T14:30:00"),
    name: "Jane Smith",
    phoneNumber: "081234567891",
    packageName: "10000 Kata x 7",
    paymentMethod: "E-WALLET",
    paidAt: new Date("2024-09-29T14:40:00"),
    total: 70000, // 7 x 10.000
  },
  {
    orderId: "ORD543216789",
    status: "failed",
    createdAt: new Date("2024-09-30T16:45:00"),
    name: "Michael Johnson",
    phoneNumber: "081234567892",
    packageName: "10000 Kata x 3",
    paymentMethod: "QRIS",
    total: 30000, // 3 x 10.000
  },
  {
    orderId: "ORD678912345",
    status: "settled",
    createdAt: new Date("2024-10-02T09:15:00"),
    name: "Emily Davis",
    phoneNumber: "081234567893",
    packageName: "10000 Kata x 8",
    paymentMethod: "E-WALLET",
    paidAt: new Date("2024-09-29T14:40:00"),
    total: 80000, // 8 x 10.000
  },
  {
    orderId: "ORD112233445",
    status: "pending",
    createdAt: new Date("2024-10-03T11:00:00"),
    name: "Robert Wilson",
    phoneNumber: "081234567894",
    packageName: "10000 Kata x 6",
    paymentMethod: "QRIS",
    total: 60000, // 6 x 10.000
  },
];

export type TTransaction = {
  orderId: string;
  status: "pending" | "settled" | "failed";
  createdAt: Date;
  paidAt?: Date;
  name: string;
  phoneNumber: string;
  packageName: string;
  paymentMethod: "QRIS" | "E-WALLET";
  total: number;
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
        "bg-green-100 text-green-600 hover:bg-green-100/80":
          value === "Berhasil",
        "bg-yellow-100 text-yellow-600 hover:bg-yellow-100/80":
          value === "Ditunda",
        "bg-red-100 text-red-600 hover:bg-red-100/80": value === "Gagal",
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
    accessorKey: "total",
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
