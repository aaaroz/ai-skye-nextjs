"use client";
import * as React from "react";
import Link from "next/link";
import { dashboardUserRoute } from "@/libs/entities";
import { ActionButton, CategoryBadge } from "@/components/dashboard-page";
import { FileTextIcon } from "lucide-react";
import { useProfileData } from "@/libs/hooks";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { DocumentDeleteTrigger } from "@/app/apps/user/documents/_modules/sections/document-list-section/document.delete.dialog";

export const NewestDocument: React.FC = (): React.ReactElement => {
  const { profileData } = useProfileData();
  const newestDoc =
    profileData && profileData?.dokumenTersimpan.length > 0
      ? profileData?.dokumenTersimpan.reduce((latest, current) => {
          return new Date(current.timestamp) > new Date(latest.timestamp)
            ? current
            : latest;
        })
      : "No Documents";

  const value =
    newestDoc !== "No Documents" ? (newestDoc.category as string) : null;
  const getVariant =
    value?.toLowerCase() === "tiktok"
      ? "tiktok"
      : value?.toLowerCase() === "instagram"
      ? "instagram"
      : "ecommerce";

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 rounded-md shadow-md overflow-auto bg-neutral-50 w-full h-fit lg:w-[60%]">
      <Link
        href={dashboardUserRoute.concat("documents")}
        title="Lihat semua dokumen"
      >
        <h1 className="text-xl md:text-2xl font-bold">Dokumen Terbaru</h1>
      </Link>
      {newestDoc !== "No Documents" ? (
        <div className="space-y-2">
          <div className="flex items-center justify-start py-2 border-b border-neutral-2">
            <strong className="w-[40%]">Nama Dokumen</strong>
            <p>{newestDoc.title}</p>
          </div>
          <div className="flex items-center justify-start py-2 border-b border-neutral-2">
            <strong className="w-[40%]">Kategori</strong>
            <CategoryBadge variant={getVariant}>
              {newestDoc.category}
            </CategoryBadge>
          </div>
          <div className="flex items-center justify-start py-2 border-b border-neutral-2">
            <strong className="w-[40%]">Dibuat pada</strong>
            <p>
              {format(newestDoc.timestamp, "dd MMMM yyyy", { locale: id })}
              <span className="text-muted-foreground">
                {format(newestDoc.timestamp, "K:mm aa", {
                  locale: id,
                })}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-start py-2 border-b border-neutral-2">
            <strong className="w-[40%]">Token yang digunakan</strong>
            <p>{newestDoc.tokensUsed}</p>
          </div>
          <div className="flex items-center justify-start py-2 border-b border-neutral-2">
            <strong className="w-[40%]">Aksi</strong>
            <div className="flex gap-0.5">
              <Link
                href={dashboardUserRoute.concat(`documents/${newestDoc.id}`)}
              >
                <ActionButton className="shrink-0">
                  <FileTextIcon size={16} />
                </ActionButton>
              </Link>
              <DocumentDeleteTrigger id={newestDoc.id} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-40 flex justify-center items-center text-muted-foreground">
          <p>Belum ada dokumen yang tersimpan</p>
        </div>
      )}
    </div>
  );
};
