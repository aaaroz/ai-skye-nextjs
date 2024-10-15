import * as React from "react";
import { FileTextIcon } from "lucide-react";
import { CategoryBadge, HeadingWithIcon } from "@/components/dashboard-page";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { DocumentDetailForm } from "./document.detail.form";
import { TDocument } from "@/libs/entities";

export const DocumentDetailSection: React.FC<TDocument> = ({
  category,
  timestamp,
  tokensUsed,
  title,
  response,
  id,
}): React.ReactElement => {
  const date = format(timestamp, "dd MMMM yyyy");
  const time = format(timestamp, "K:mm aa");
  const getVariant =
    category?.toLowerCase() === "tiktok"
      ? "tiktok"
      : category?.toLowerCase() === "instagram"
      ? "instagram"
      : "ecommerce";
  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon icon={<FileTextIcon size={32} />} text="Dokumen Saya" />
      <div className="space-y-1">
        <CategoryBadge variant={getVariant}>{category}</CategoryBadge>
        <p className="text-sm md:text-base font-normal">
          Dibuat pada <strong>{date}</strong>{" "}
          <span className="text-muted-foreground">{time}</span>
        </p>
        <p className="text-sm md:text-base">
          Jumlah Kata yang digunakan <strong>{tokensUsed}</strong>
        </p>
      </div>
      <Separator />
      <DocumentDetailForm title={title} text={response} id={id} />
    </section>
  );
};

