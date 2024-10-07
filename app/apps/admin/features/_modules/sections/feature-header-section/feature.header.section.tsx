"use client";
import * as React from "react";
import { CpuIcon, Loader2Icon, PlusIcon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { Input } from "@/components/ui/input";
import { useDebounce, useFeatureDashboard } from "@/libs/hooks";
import { dashboardAdminRoute, dummyFeatures } from "@/libs/entities";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FeatureHeaderSection: React.FC = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const { debouncedValue, isLoading } = useDebounce(
    searchQuery?.toLowerCase() as string,
    400
  );
  const { setFeatures } = useFeatureDashboard();

  const filterFeatures = React.useCallback(() => {
    const filteredFeature = dummyFeatures.filter(
      (feature) =>
        feature.title.toLowerCase().includes(debouncedValue) ||
        feature.description.toLowerCase().includes(debouncedValue) ||
        feature.category.toLowerCase().includes(debouncedValue)
    );

    setFeatures(filteredFeature);
  }, [debouncedValue, setFeatures]);

  React.useEffect(() => {
    if (debouncedValue) {
      filterFeatures();
    } else {
      setFeatures(dummyFeatures);
    }
  }, [filterFeatures, debouncedValue, setFeatures]);

  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon
        icon={<CpuIcon size={32} />}
        text="Artificial Intellegent"
      />
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Atur fitur AI Generator yang akan digunakan oleh pengguna!
      </p>
      <div className="w-full flex gap-4">
        <div className="relative w-full">
          <Input
            placeholder="Cari fitur AI..."
            className="w-full"
            value={searchQuery as string}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isLoading ? (
            <span className="absolute right-4 top-1/2 -translate-y-1/2">
              <Loader2Icon className="animate-spin" />
            </span>
          ) : null}
        </div>
        <Link href={dashboardAdminRoute.concat("features/form/")}>
          <Button>
            <PlusIcon size={18} className="mr-2.5" />
            Tambah AI Generator Baru
          </Button>
        </Link>
      </div>
    </section>
  );
};
