import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FolderArchiveIcon } from "lucide-react";

interface DocumentCardProps {
  title: string;
  count: number;
}
export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  count,
}): React.ReactElement => {
  return (
    <Card>
      <CardContent className="p-4 flex gap-2.5 md:flex-wrap-reverse lg:flex-nowrap justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-lg md:text-xl font-semibold capitalize">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">{count}</h2>
        </div>
        <div className="no-shrink">
          <FolderArchiveIcon className="size-10 md:size-14 text-sky-800" />
        </div>
      </CardContent>
    </Card>
  );
};
