"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { CopyIcon, Edit2Icon, EyeIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useGenerateAI, useProfileData } from "@/libs/hooks";
import Markdown from "markdown-to-jsx";
import MarkdownIt from "markdown-it";
import { saveDocument } from "@/libs/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { dashboardUserRoute } from "@/libs/entities";

export const FeatureResultSection: React.FC = (): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("Judul Dokumen Baru");
  const md = MarkdownIt();
  const router = useRouter();

  const { resultText, isGenerating, completionResponse, setResultText } =
    useGenerateAI();

  const { toggleShouldFetchData } = useProfileData();
  const handleSaveDoc = async () => {
    try {
      setIsLoading(true);
      const res = await saveDocument(
        resultText,
        newTitle,
        completionResponse?.categoryname as string,
        completionResponse?.totalWordsGenerated as number
      );
      toast.success("Dokumen berhasil disimpan!", {
        description: res,
      });
      router.push(dashboardUserRoute.concat("documents"));
      toggleShouldFetchData(true);
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat menyimpan dokumen", {
        description: "try again later!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (completionResponse) {
      setNewTitle(completionResponse.featuresname as string);
    }
  }, [completionResponse]);
  return (
    <section
      id="hasil-respon-ai"
      className="p-4 md:p-6 space-y-6 rounded-md shadow-md overflow-auto scroll-m-80 bg-neutral-50 w-full h-fit lg:w-[60%]"
    >
      <div className="flex gap-2.5">
        <div className="w-full">
          <Input
            placeholder="Masukkan Judul Dokumen"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <Button
          variant={isEditing ? "default" : "outline"}
          size="icon"
          className="shrink-0"
          onClick={() => setIsEditing((prev) => !prev)}
          disabled={isGenerating || isLoading}
        >
          {isEditing ? <EyeIcon /> : <Edit2Icon />}
        </Button>
        <Button variant="outline" size="icon" className="shrink-0">
          <CopyIcon />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="shrink-0"
          onClick={handleSaveDoc}
          disabled={isGenerating || isLoading}
        >
          <SaveIcon />
        </Button>
      </div>
      <div className="overflow-auto h-full">
        {isEditing ? (
          <Textarea
            value={resultText}
            className="min-h-[900px]"
            onChange={(e) => setResultText(e.target.value)}
            disabled={isGenerating || isLoading}
          />
        ) : (
          <Markdown
            options={{
              overrides: {
                ol: {
                  props: {
                    className: "list-decimal ml-4 space-y-2",
                  },
                },
              },
            }}
            className="text-sm inline-flex flex-col space-y-2 min-h-[900px] w-full rounded-md p-4 text-muted-foreground border border-neutral-200"
          >
            {md.render(resultText)}
          </Markdown>
        )}
      </div>
    </section>
  );
};
