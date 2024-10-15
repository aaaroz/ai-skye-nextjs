import * as React from "react";
import { cn } from "@/libs/utils";
import { Badge } from "@/components/ui/badge";
import { Trash2Icon } from "lucide-react";

interface PromptCardProps {
  name: string;
  description: string;
  category: string;
  onClickCard?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  name,
  description,
  category,
  onClickCard,
}): React.ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-col w-full relative items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-neutral-400 group"
      )}
      onClick={onClickCard}
    >
      <Trash2Icon className="group-hover:opacity-100 z-20 group-hover:blur-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-red-600" />
      <h1 className="font-semibold group-hover:blur-sm">{name}</h1>
      <p className="line-clamp-3 text-xs text-muted-foreground group-hover:blur-sm">
        {description}
      </p>
      <Badge className="text-xs group-hover:blur-sm">{category}</Badge>
    </button>
  );
};
