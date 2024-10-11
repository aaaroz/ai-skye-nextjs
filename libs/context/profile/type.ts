import * as React from "react";
import { TProfileData } from "@/libs/entities";

export type TProfileContext = {
  profileData: TProfileData | null;
  setProfileData: React.Dispatch<React.SetStateAction<TProfileData | null>>;
  shouldFetchData: boolean;
  toggleShouldFetchData: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TProfileContextProvider = {
  children: React.ReactNode;
};
