import * as React from "react";
import { VerifyPageModule } from "./_modules";
import { LoaderIcon } from "lucide-react";

const VerifyPage: React.FC = (): React.ReactElement => {
  return (
    <React.Suspense
      fallback={
        <div className="py-16 w-full text-center">
          <span className="flex">
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
