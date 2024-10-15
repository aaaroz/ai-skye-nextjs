"use client";
import * as React from "react";
import { useProfileData } from "@/libs/hooks";

export const TokenCard: React.FC = (): React.ReactElement => {
  const { profileData } = useProfileData();
  return (
    <div className="w-fit text-center rounded px-6 py-4 bg-sky-100">
      <h1 className="text-xl font-semibold">Sisa Kata</h1>
      <h2 className="text-4xl font-bold">{profileData?.wordCredits}</h2>
    </div>
  );
};
