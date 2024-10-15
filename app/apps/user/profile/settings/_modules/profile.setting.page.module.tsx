import * as React from "react";
import { ChangePasswordForm, PersonalDataForm } from "./components";

export const ProfileSettingsPageModule: React.FC = (): React.ReactElement => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 py-4">
      <PersonalDataForm />
      <ChangePasswordForm />
    </section>
  );
};
