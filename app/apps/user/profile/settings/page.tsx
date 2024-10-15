import * as React from "react";
import { Metadata, NextPage } from "next";
import { ProfileSettingsPageModule } from "./_modules";

export const metadata: Metadata = {
  title: "Pengaturan Akun",
};


const ProfileSettingsPage: NextPage = (): React.ReactElement => {
  return <ProfileSettingsPageModule />;
};

export default ProfileSettingsPage;
