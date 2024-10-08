"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils";

export const paymentData: TPayment[] = [
  {
    orderId: "PAY123456789",
    status: "pending",
    createdAt: new Date("2024-10-01T10:00:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 5",
    paymentMethod: "QRIS",
    total: 50000,
  },
  {
    orderId: "PAY987654321",
    status: "settled",
    createdAt: new Date("2024-09-28T14:30:00"),
    paidAt: new Date("2024-09-29T09:45:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 7",
    paymentMethod: "E-WALLET",
    total: 70000,
  },
  {
    orderId: "PAY543216789",
    status: "failed",
    createdAt: new Date("2024-09-30T16:45:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 3",
    paymentMethod: "QRIS",
    total: 30000,
  },
  {
    orderId: "PAY678912345",
    status: "settled",
    createdAt: new Date("2024-10-02T09:15:00"),
    paidAt: new Date("2024-10-02T11:00:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 8",
    paymentMethod: "E-WALLET",
    total: 80000,
  },
  {
    orderId: "PAY112233445",
    status: "pending",
    createdAt: new Date("2024-10-03T11:00:00"),
    name: "John Doe",
    phoneNumber: "081234567890",
    packageName: "10000 Kata x 6",
    paymentMethod: "QRIS",
    total: 60000,
  },
];

export type TPayment = {
  orderId: string;
  status: "pending" | "settled" | "failed";
  createdAt: Date;
  name: string;
  paidAt?: Date;
  phoneNumber: string;
  packageName: string;
  paymentMethod: "QRIS" | "E-WALLET";
  total: number;
};

export const paymentColumns: ColumnDef<TPayment>[] = [
  {
    accessorKey: "orderId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID Pesanan
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start whitespace-normal px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dibayar oleh
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
];
