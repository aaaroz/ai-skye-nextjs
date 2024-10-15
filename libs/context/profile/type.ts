import * as React from "react";
import { TDocument, TProfileData } from "@/libs/entities";

export type TProfileContext = {
  profileData: TProfileData | null;
  setProfileData: React.Dispatch<React.SetStateAction<TProfileData | null>>;
  shouldFetchData: boolean;
  toggleShouldFetchData: React.Dispatch<React.SetStateAction<boolean>>;
  documents: TDocument[];
  setDocuments : React.Dispatch<React.SetStateAction<TDocument[]>>
};

export type TProfileContextProvider = {
  children: React.ReactNode;
};
