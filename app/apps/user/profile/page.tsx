import * as React from "react";
import { Metadata, NextPage } from "next";
import { ProfilePageModule } from "./_modules";

export const metadata: Metadata = {
  title: "Akun saya",
};


const ProfilePage: NextPage = (): React.ReactElement => {
  return <ProfilePageModule />;
};

export default ProfilePage;
