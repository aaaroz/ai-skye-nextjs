import * as React from "react";
import { ForgotPasswordPageModule } from "./_modules";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Lupa Kata Sandi",
};
const ForgotPasswordPage: NextPage= (): React.ReactElement => {
  return <ForgotPasswordPageModule />;
};

export default ForgotPasswordPage;
