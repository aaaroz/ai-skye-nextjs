import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ActionButton, CategoryBadge } from "@/components/dashboard-page";
import { categories, dashboardAdminRoute } from "@/libs/entities";
import { cn } from "@/libs/utils";
import { EditIcon, Trash2Icon } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  headline: string;
  category: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  headline,
  category,
}): React.ReactElement => {
  const categoryData = categories.find((item) => item.name === category);
  const backgroundTitle = {
    "from-sky-600 via-sky-100 to-transparent": category === "tiktok",
    "from-rose-600 via-rose-100 to-transparent": category === "instagram",
    "from-orange-600 via-orange-100 to-transparent": category === "ecommerce",
  };
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="w-full p-4">
        <div className={cn("py-2 rounded bg-gradient-to-l", backgroundTitle)}>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-base text-muted-foreground">{headline}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center p-4 pt-0">
        <CategoryBadge
          variant={
            categoryData?.name === "tiktok"
              ? "tiktok"
              : categoryData?.name === "instagram"
              ? "instagram"
              : "ecommerce"
          }
        >
          {categoryData?.title}
        </CategoryBadge>
        <div className="flex gap-1.5">
          <Link
            href={`${dashboardAdminRoute}features/form?editId=${id}`}
            title={title}
          >
            <ActionButton className="shrink-0">
              <EditIcon size={16} />
            </ActionButton>
          </Link>
          <ActionButton variant="destructive" className="shrink-0">
            <Trash2Icon size={16} />
          </ActionButton>
        </div>
      </CardFooter>
    </Card>
  );
};
