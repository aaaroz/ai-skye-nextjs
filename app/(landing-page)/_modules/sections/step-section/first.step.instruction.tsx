import { InspectIcon } from "lucide-react";
import * as React from "react";

export const FirstStepInstruction: React.FC = (): React.ReactElement => {
  return (
    <div className="order-1 md:order-none w-full p-4 space-y-6">
      <div className="flex gap-2 items-center">
        <div className="relative size-12 md:size-14 rounded-full bg-sky-100 text-sky-800">
          <InspectIcon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-6 md:size-7" />
        </div>
        <div className="space-y-1">
          <span className="text-sm sm:text-base md:text-lg font-medium text-sky-800">
            Langkah 1
          </span>
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">Pilih Fitur AI</h1>
        </div>
      </div>
      <div className="w-full">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Pada menu Generator AI, Pilihlah fitur yang akan kamu gunakan untuk
          membuat konten. Ada banyak sekali fitur-fitur AI yang dapat memudahkan
          kamu untuk membuat konten.
        </p>
      </div>
    </div>
  );
};
