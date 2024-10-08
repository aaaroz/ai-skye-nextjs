"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const userData: TUser[] = [
  {
    id: "1",
    name: "John Doe",
    imgUrl: "/avatars/avatar-male.png",
    birtDate: new Date("2024-01-12T08:30:00"),
    joinDate: new Date("2023-02-05T14:45:00"),
    phoneNumber: "081213293483",
    position: "CEO",
  },
  {
    id: "2",
    name: "Jane Doe",
    imgUrl: "/avatars/avatar-female.png",
    birtDate: new Date("2024-02-05T14:45:00"),
    joinDate: new Date("2023-02-05T14:45:00"),
    phoneNumber: "082392938478",
    position: "CTO",
  },
];

export type TUser = {
  id: string;
  name: string;
  imgUrl: string;
  birtDate: Date;
  joinDate: Date;
  position: string;
  phoneNumber: string;
};

export const userColumns: ColumnDef<TUser>[] = [
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
      const initialName = name.split(" ")[0][0] + name.split(" ")[1][0];
      const img = row.original.imgUrl as string;
      return (
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarFallback>{initialName}</AvatarFallback>
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
    accessorKey: "birtDate",
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
      const date = format(row.getValue("birtDate") as Date, "dd MMMM yyyy", {
        locale: id,
      });

      return (
        <div className="flex flex-col">
          <strong>{date}</strong>
        </div>
      );
    },
  },
  {
    accessorKey: "joinDate",
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
      const date = format(row.getValue("joinDate") as Date, "dd MMMM yyyy", {
        locale: id,
      });

      const time = format(row.getValue("joinDate") as Date, "K:mm aa", {
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
];
