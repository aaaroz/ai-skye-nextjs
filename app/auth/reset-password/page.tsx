import * as React from "react";
import { ResetPasswordPageModule } from "./_modules";
import { LoaderIcon } from "lucide-react";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Ganti Kata Sandi Baru",
};

const ResetPasswordPage: NextPage = (): React.ReactElement => {
  return (
    <React.Suspense
      fallback={
        <div className="py-16 w-full text-center">
          <span className="flex w-full items-center justify-center">
            <LoaderIcon className="size-6 animate-spin" /> Loading...
          </span>
        </div>
      }
    >
      <ResetPasswordPageModule />
    </React.Suspense>
  );
};

export default ResetPasswordPage;
