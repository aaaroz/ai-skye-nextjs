import * as React from "react";
import { NextPage } from "next";
import { ProfilePageModule } from "./_modules";

export const runtime = "edge";

const ProfilePage: NextPage = (): React.ReactElement => {
  return <ProfilePageModule />;
};

export default ProfilePage;
