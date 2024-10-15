import * as React from "react";
import { RegisterPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Daftar",
};

const RegisterPage: NextPage = (): React.ReactElement => {
  return <RegisterPageModule />;
};

export default RegisterPage;
