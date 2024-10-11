"use client";
import * as React from "react";
import { FoldersIcon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { Separator } from "@/components/ui/separator";
import { DocumentTable } from "./document.table";
import { TDocument } from "@/libs/entities";
import { documentColumns, documentColumnSkeleton } from "./document.columns";
import { useProfileData } from "@/libs/hooks";

const skeletonData: TDocument[] = [
  {
    timestamp: "",
    response: "",
    id: "",
    category: "tiktok",
    tokensUsed: 0,
    title: "",
  },
  {
    timestamp: "",
    response: "",
    id: "",
    category: "instagram",
    tokensUsed: 0,
    title: "",
  },
];

export const DocumentListSection: React.FC = (): React.ReactElement => {
  const { profileData } = useProfileData();
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon
        icon={<FoldersIcon size={32} />}
        text="Semua Dokumen Saya"
      />
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Hasil luaran ide dari Artificial Intelegent yang telah digenerate dapat
        kamu ubah dan kamu simpan dihalaman dokumen ini, jadi anda tidak akan
        kehilangan riwayat generator AI kami, dan juga anda dapat mengolah ide
        tersebut sepuasnya.
      </p>
      <Separator />
      {profileData ? (
        <DocumentTable
          columns={documentColumns}
          data={profileData?.dokumenTersimpan as TDocument[]}
        />
      ) : (
        <DocumentTable columns={documentColumnSkeleton} data={skeletonData} />
      )}
    </section>
  );
};
