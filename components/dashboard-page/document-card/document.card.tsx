"use client";
import * as React from "react";
import { useProfileData } from "@/libs/hooks";

export const DocumentCard: React.FC = (): React.ReactElement => {
  const { profileData } = useProfileData();
  return (
    <div className="w-fit text-center rounded px-6 py-4 bg-sky-100">
      <h1 className="text-xl font-semibold">Dokumen Saya</h1>
      <h2 className="text-4xl font-bold">
        {profileData?.dokumenTersimpan.length.toString()}
      </h2>
    </div>
  );
};
