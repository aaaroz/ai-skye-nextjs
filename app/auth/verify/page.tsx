import * as React from "react";
import { Metadata, NextPage } from "next";
import { VerifyPageModule } from "./_modules";
import { LoaderIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Verifikasi OTP",
};

const VerifyPage: NextPage = (): React.ReactElement => {
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
      <VerifyPageModule />
    </React.Suspense>
  );
};

export default VerifyPage;
