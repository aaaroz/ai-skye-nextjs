"use client";
import * as React from "react";
import { CopyIcon, Edit2Icon, EyeIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Markdown from "markdown-to-jsx";
import MarkdownIt from "markdown-it";
import { saveDocument } from "@/libs/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface DocumentDetailFormProps {
  title: string;
  text: string;
  id: string;
}
export const DocumentDetailForm: React.FC<DocumentDetailFormProps> = ({
  title,
  text,
  id,
}): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState({ text, title });
  const md = MarkdownIt();
  const router = useRouter();

  const handleSaveDoc = async () => {
    try {
      setIsLoading(true);
      const res = await saveDocument(value.text, value.title, id);
      toast.success("Dokumen berhasil disimpan!", {
        description: res,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat menyimpan dokumen", {
        description: error as string,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex gap-2.5">
        <div className="w-full">
          <Input
            placeholder="Judul dokumen baru"
            value={value.title}
            onChange={(e) => setValue({ ...value, title: e.target.value })}
            disabled={isLoading}
          />
        </div>
        <Button
          variant={isEditing ? "default" : "outline"}
          size="icon"
          className="shrink-0 hidden"
          onClick={() => setIsEditing((prev) => !prev)}
          disabled={isLoading}
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
          disabled={isLoading}
        >
          <SaveIcon />
        </Button>
      </div>
      <div className="overflow-auto h-full">
        {isEditing ? (
          <Textarea
            value={value.text}
            className="min-h-[400px]"
            onChange={(e) => setValue({ ...value, text: e.target.value })}
            disabled={isLoading}
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
            className="text-sm space-y-2 rounded-md p-4 text-muted-foreground whitespace-pre-line border border-neutral-200"
          >
            {md.render(value.text)}
          </Markdown>
        )}
      </div>
    </>
  );
};
