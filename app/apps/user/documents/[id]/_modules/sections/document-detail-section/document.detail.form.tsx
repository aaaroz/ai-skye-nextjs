import * as React from "react";
import { CopyIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface DocumentDetailFormProps {
  title: string;
  text: string;
}
export const DocumentDetailForm: React.FC<DocumentDetailFormProps> = ({
  title,
  text,
}): React.ReactElement => {
  return (
    <>
      <div className="flex gap-2.5">
        <div className="w-full">
          <Input placeholder="Judul dokumen baru" value={title} />
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <CopyIcon />
        </Button>
        <Button variant="default" size="icon" className="shrink-0">
          <SaveIcon />
        </Button>
      </div>
      <div className="overflow-auto h-full">
        <Textarea value={text} className="min-h-[400px]" />
      </div>
    </>
  );
};
