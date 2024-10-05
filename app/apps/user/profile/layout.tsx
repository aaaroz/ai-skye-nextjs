import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { ProfileSection } from "./_sections";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <DashboardContentContainer pageTitle="Akun saya">
      <ProfileSection />
      {children}
    </DashboardContentContainer>
  );
};

export default ProfileLayout;
