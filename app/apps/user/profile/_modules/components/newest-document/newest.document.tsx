import * as React from "react";
import Link from "next/link";
import { dashboardUserRoute } from "@/libs/entities";
import { ActionButton, CategoryBadge } from "@/components/dashboard-page";
import { FileTextIcon, Trash2Icon } from "lucide-react";

export const NewestDocument: React.FC = (): React.ReactElement => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 rounded-md shadow-md overflow-auto bg-neutral-50 w-full h-fit lg:w-[60%]">
      <Link
        href={dashboardUserRoute.concat("documents")}
        title="Lihat semua dokumen"
      >
        <h1 className="text-xl md:text-2xl font-bold">Dokumen Terbaru</h1>
      </Link>
      <div className="space-y-2">
        <div className="flex items-center justify-start py-2 border-b border-neutral-2">
          <strong className="w-[40%]">Nama Dokumen</strong>
          <p>Konten Tiktok Produk Seblak</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-2">
          <strong className="w-[40%]">Kategori</strong>
          <CategoryBadge variant="tiktok">TikTok & TikTok Shop</CategoryBadge>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-2">
          <strong className="w-[40%]">Dibuat pada</strong>
          <p>
            19 Sept 2024 <span className="text-muted-foreground">10:50 AM</span>
          </p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-2">
          <strong className="w-[40%]">Token yang digunakan</strong>
          <p>890 Token</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-2">
          <strong className="w-[40%]">Aksi</strong>
          <div className="flex gap-0.5">
            <ActionButton className="shrink-0">
              <FileTextIcon size={16} />
            </ActionButton>
            <ActionButton className="shrink-0" variant="destructive">
              <Trash2Icon size={16} />
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};
