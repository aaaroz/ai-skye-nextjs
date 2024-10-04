"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { dummyPrompts, TPrompt } from "@/libs/entities";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/libs/utils";
import { useDebounce } from "@/libs/hooks";
import { Loader2Icon } from "lucide-react";

interface FeaturePromptListProps {
  selectedCategory?: string;
  productName?: string;
  selectedPrompt: TPrompt;
  onSelectPrompt: React.Dispatch<React.SetStateAction<TPrompt>>;
}

export const FeaturePromptList: React.FC<FeaturePromptListProps> = ({
  productName,
  selectedCategory,
  selectedPrompt,
  onSelectPrompt,
}): React.ReactElement => {
  const [prompts, setPrompts] = React.useState<TPrompt[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const { debouncedValue, isLoading } = useDebounce(
    (searchQuery?.toLowerCase() as string) ||
      (selectedCategory?.toLowerCase() as string),
    400
  );

  const filterPrompts = React.useCallback(
    (searchQuery: string) => {
      const filteredPrompts = dummyPrompts.filter(
        (feature) =>
          feature.title.toLowerCase().includes(searchQuery) ||
          feature.description.toLowerCase().includes(searchQuery) ||
          feature.category.toLowerCase().includes(searchQuery)
      );

      setPrompts(filteredPrompts);
    },
    [debouncedValue, setPrompts]
  );

  React.useEffect(() => {
    if (debouncedValue) {
      filterPrompts(debouncedValue);
    } else {
      setPrompts(dummyPrompts);
    }
  }, [filterPrompts, debouncedValue, setPrompts]);
  return (
    <>
      <div className="relative">
        <Input
          placeholder="Cari perintah AI..."
          className="w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {isLoading ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <Loader2Icon className="animate-spin" />
          </span>
        ) : null}
      </div>
      <ScrollArea className="h-[300px] gap-2">
        {prompts.length !== 0 ? (
          prompts.map(({ title, description, category }, index) => {
            const formattedDescription = description.replace(
              "{NamaProduk}",
              productName || "{NamaProduk}"
            );
            return (
              <button
                key={index}
                type="button"
                className={cn(
                  "flex flex-col items-start gap-2 rounded-lg border p-3 my-2 text-left text-sm transition-all hover:bg-neutral-200",
                  {
                    "bg-neutral-200": title === selectedPrompt?.title,
                  }
                )}
                onClick={() =>
                  onSelectPrompt({
                    title,
                    description: formattedDescription,
                    category,
                  })
                }
              >
                <h1 className="font-semibold">{title}</h1>
                <p className="line-clamp-3 text-xs text-muted-foreground">
                  {formattedDescription}
                </p>
                <Badge className="text-xs">{category}</Badge>
              </button>
            );
          })
        ) : (
          <p className="text-sm text-muted-foreground">
            Tidak ada perintah AI yang ditemukan
          </p>
        )}
      </ScrollArea>
    </>
  );
};
