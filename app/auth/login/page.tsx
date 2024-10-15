import * as React from "react";
import { LoginPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Masuk",
};

const LoginPage: NextPage = (): React.ReactElement => {
  return <LoginPageModule />;
};

export default LoginPage;
