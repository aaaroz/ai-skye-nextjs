import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const categoryBadgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
        tiktok:
          "border-transparent bg-sky-100 text-sky-600 hover:bg-sky-100/80 dark:bg-sky-800 dark:text-sky-50 dark:hover:bg-sky-800/80",
        instagram:
          "border-transparent bg-rose-100 text-rose-600 hover:bg-rose-100/80 dark:bg-rose-800 dark:text-rose-50 dark:hover:bg-rose-800/80",
        "e-commerce":
          "border-transparent bg-orange-100 text-orange-600 hover:bg-orange-100/80 dark:bg-orange-800 dark:text-orange-50 dark:hover:bg-orange-800/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CategoryBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof categoryBadgeVariants> {}
export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  className,
  variant,
  ...props
}): React.ReactElement => {
  return (
    <div
      className={cn(categoryBadgeVariants({ variant }), className)}
      {...props}
    />
  );
};
