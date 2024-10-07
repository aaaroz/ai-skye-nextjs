import * as React from "react";
import { cn } from "@/libs/utils";
import { Badge } from "@/components/ui/badge";

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
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-neutral-200"
      )}
      onClick={onClickCard}
    >
      <h1 className="font-semibold">{name}</h1>
      <p className="line-clamp-3 text-xs text-muted-foreground">
        {description}
      </p>
      <Badge className="text-xs">{category}</Badge>
    </button>
  );
};
