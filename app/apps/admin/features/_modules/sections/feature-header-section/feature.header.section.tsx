"use client";
import * as React from "react";
import Link from "next/link";
import { CpuIcon, Loader2Icon, PlusIcon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { Input } from "@/components/ui/input";
import { useDebounce, useFeatures } from "@/libs/hooks";
import { dashboardAdminRoute, Feature } from "@/libs/entities";
import { Button } from "@/components/ui/button";

export const FeatureHeaderSection: React.FC = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const { debouncedValue, isLoading } = useDebounce(
    searchQuery?.toLowerCase() as string,
    400
  );
  const { features, setFilteredFeatures } = useFeatures();

  const filterFeatures = React.useCallback(() => {
    const filteredFeature = features?.filter(
      (feature) =>
        feature.featuresname.toLowerCase().includes(debouncedValue) ||
        feature.subdeskripsi.toLowerCase().includes(debouncedValue) ||
        feature.categoryname.toLowerCase().includes(debouncedValue)
    );

    setFilteredFeatures(filteredFeature as Feature[]);
  }, [debouncedValue, setFilteredFeatures, features]);

  React.useEffect(() => {
    if (debouncedValue) {
      filterFeatures();
    } else {
      setFilteredFeatures(features as Feature[]);
    }
  }, [filterFeatures, debouncedValue, setFilteredFeatures, features]);

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
