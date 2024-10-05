import * as React from "react";
import { Input } from "@/components/ui/input";
import { CopyIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const FeatureResultSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md shadow-md overflow-auto bg-neutral-50 w-full h-fit lg:w-[60%]">
      <div className="flex gap-2.5">
        <div className="w-full">
          <Input placeholder="Judul dokumen baru" />
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <CopyIcon />
        </Button>
        <Button variant="default" size="icon" className="shrink-0">
          <SaveIcon />
        </Button>
      </div>
      <div className="overflow-auto h-full">
        <Textarea className="min-h-[900px]" />
      </div>
    </section>
  );
};
