"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils";
import { TTransaction } from "@/libs/entities";

export const paymentColumns: ColumnDef<TTransaction>[] = [
  {
    accessorKey: "order_id",
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
    cell: ({ row }) => {
      return (
        <div className="max-w-xs truncate">
          <strong>{row.getValue("order_id")}</strong>
        </div>
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
        row.getValue("status") === "settlement"
          ? "Berhasil"
          : row.getValue("status") === "pending"
          ? "Ditunda"
          : row.getValue("status") === "expire"
          ? "Terlewat"
          : "Gagal";

      const badgeClassName = {
        "bg-green-100 text-green-600 hover:bg-green-100/80":
          value === "Berhasil",
        "bg-yellow-100 text-yellow-600 hover:bg-yellow-100/80":
          value === "Ditunda",
        "bg-red-100 text-red-600 hover:bg-red-100/80":
          value === "Gagal" || value === "Terlewat",
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
      const rawValue = row.getValue("createdAt") as string;

      return (
        <div className="flex flex-col">
          <span>{rawValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "first_name",
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
    cell: ({ row }) => {
      const firstName = row.getValue("first_name");
      const lastName = row.original.last_name;
      const fullName = `${firstName} ${lastName}`;
      return fullName;
    },
  },
];

export const paymentColumnSkeleton: ColumnDef<TTransaction>[] = [
  {
    accessorKey: "order_id",
    header: "ID Pesanan",
    cell: () => {
      return (
        <div className="w-full rounded-md h-5 bg-neutral-200 animate-pulse" />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: () => {
      return (
        <div className="w-full rounded-md h-5 bg-neutral-200 animate-pulse" />
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Dibuat pada",
    cell: () => {
      return (
        <div className="w-full rounded-md h-5 bg-neutral-200 animate-pulse" />
      );
    },
  },
  {
    accessorKey: "first_name",
    header: "Dibayar oleh",
    cell: () => {
      return (
        <div className="w-full rounded-md h-5 bg-neutral-200 animate-pulse" />
      );
    },
  },
];
