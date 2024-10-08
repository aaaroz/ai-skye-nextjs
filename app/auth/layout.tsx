import * as React from "react";
import { Logo } from "@/components/common/logo";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <main className="flex flex-col container justify-center py-10 items-center min-h-screen">
      <Logo />
      {children}
    </main>
  );
};

export default AuthLayout;
