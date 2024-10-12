"use client";
import * as React from "react";
import { DashboardContentContainer } from "@/components/layout";
import { DocumentDetailSection } from "./sections";
import { TDocument } from "@/libs/entities";
import { getDocumentById } from "@/libs/actions";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { FileTextIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";

export const DocumentDetailPageModule: React.FC = (): React.ReactElement => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [data, setData] = React.useState<TDocument | null>(null);

  const fetchData = React.useCallback(async () => {
    try {
      const data = await getDocumentById(id);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <DashboardContentContainer pageTitle="Dokumen" withBackButton>
      {data ? (
        <DocumentDetailSection
          id={data.id}
          category={data.category}
          timestamp={data.timestamp}
          tokensUsed={data.tokensUsed}
          title={data.title}
          response={data.response}
        />
      ) : (
        <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
          <HeadingWithIcon
            icon={<FileTextIcon size={32} />}
            text="Dokumen Saya"
          />
          <div className="space-y-1">
            <div className="h-8 w-10 rounded bg-neutral-300 animate-pulse" />
            <div className="space-y-2 font-normal">
              <div className="h-8 w-10 rounded bg-neutral-300 animate-pulse" />
              <div className="h-8 w-10 rounded bg-neutral-300 animate-pulse" />
            </div>
            <div className="my-2">
              <div className="h-8 w-10 rounded bg-neutral-300 animate-pulse" />
            </div>
          </div>
          <Separator />
          <div className="w-full h-36">Loading ...</div>
        </section>
      )}
    </DashboardContentContainer>
  );
};
