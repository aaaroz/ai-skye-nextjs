"use client";
import * as React from "react";
import { TProfileContextProvider } from "./type";
import { TDocument, TProfileData } from "@/libs/entities";
import { getProfile } from "@/libs/actions";
import { useSession } from "next-auth/react";
import { ProfileContext } from "./profile.context";

export const ProfileContextProvider = ({
  children,
}: TProfileContextProvider) => {
  const [profileData, setProfileData] = React.useState<TProfileData | null>(
    null
  );
  const [documents, setDocuments] = React.useState<TDocument[]>([]);
  const [shouldFetchData, toggleShouldFetchData] =
    React.useState<boolean>(false);
  const { data } = useSession();

  const fetchProfile = React.useCallback(async () => {
    if (data) {
      const res = await getProfile(data?.user.id);
      setDocuments(res.dokumenTersimpan);
      setProfileData(res);
    }
  }, [data, setProfileData, setDocuments]);

  React.useEffect(() => {
    if (shouldFetchData) {
      fetchProfile();
      toggleShouldFetchData(false);
    }
    fetchProfile();
  }, [fetchProfile, shouldFetchData]);
  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        shouldFetchData,
        toggleShouldFetchData,
        documents,
        setDocuments,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
