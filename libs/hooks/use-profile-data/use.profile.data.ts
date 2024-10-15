import * as React from "react";
import { ProfileContext } from "@/libs/context";

export const useProfileData = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "useProfileDataContext should be used within <ProfileContextProvider>"
    );
  }
  return context;
};
