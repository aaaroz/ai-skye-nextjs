import * as React from "react";
import { LoginPageModule } from "./_modules";

export const runtime = "edge";

const LoginPage: React.FC = (): React.ReactElement => {
  return <LoginPageModule />;
};

export default LoginPage;
