import * as React from "react";
import { NextPage } from "next";
import { ProfileSettingsPageModule } from "./_modules";

export const runtime = "edge";

const ProfileSettingsPage: NextPage = (): React.ReactElement => {
  return <ProfileSettingsPageModule />;
};

export default ProfileSettingsPage;
