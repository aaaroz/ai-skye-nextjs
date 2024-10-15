"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUserAdminDashboard } from "@/libs/actions/users/type";

export const userColumns: ColumnDef<TUserAdminDashboard>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Pengguna
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const img = row.original.imgUrl
        ? (row.original.imgUrl as string)
        : "/avatars/avatar-male.png";
      return (
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarFallback>
              <UserIcon />
            </AvatarFallback>
            <AvatarImage src={img} />
          </Avatar>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start whitespace-normal px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nomor telepon
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: "birthDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Lahir
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <strong>{row.getValue("birthDate")}</strong>
        </div>
      );
    },
  },
  {
    accessorKey: "joindate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-left justify-start px-0 whitespace-normal hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bergabung pada
          <ArrowUpDown className="ml-2 size-3 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <strong>{row.getValue("joindate")}</strong>
        </div>
      );
    },
  },
];
