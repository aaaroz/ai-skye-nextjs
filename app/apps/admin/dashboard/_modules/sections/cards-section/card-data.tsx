import { CpuIcon, EyeIcon, Users2Icon, Wallet2Icon } from "lucide-react";
import { TCardItemProps } from "./type";

const iconSize = 24;

export const cardData: TCardItemProps[] = [
  {
    title: "Total Fitur AI",
    icon: <CpuIcon size={iconSize} />,
    count: 0,
    isHighlighted: true,
    desc: "Semua fitur AI yang aktif",
  },
  {
    title: "Total Pengguna",
    icon: <Users2Icon size={iconSize} />,
    count: 0,
    isHighlighted: false,
    desc: "Semua pengguna aktif KontenKilat",
  },
  {
    title: "Total Transaksi",
    icon: <Wallet2Icon size={iconSize} />,
    count: 0,
    isHighlighted: false,
    desc: "Semua Transaksi yang tersimpan",
  },
  {
    title: "Total Pengunjung",
    icon: <EyeIcon size={iconSize} />,
    count: 0,
    isHighlighted: false,
    desc: "Semua pengunjung KontenKilat",
  },
];
