"use client";
import * as React from "react";
import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();
  return (
    <button title={`Kembali ke halaman ${title}`} onClick={() => router.back()} className='inline-flex whitespace-nowrap text-lg font-bold capitalize'>
        <MoveLeftIcon className="mr-2" />
        <span>{title}</span>
    </button>
  );
};
