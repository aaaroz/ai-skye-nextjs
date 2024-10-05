import * as React from "react";
import { NewestDocument, PersonalData } from "./components";

export const ProfilePageModule: React.FC = (): React.ReactElement => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 py-4">
      <PersonalData />
      <NewestDocument />
    </section>
  );
};
