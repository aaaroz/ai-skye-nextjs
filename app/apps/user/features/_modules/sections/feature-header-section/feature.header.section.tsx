"use client";
import * as React from "react";
import { CpuIcon, Loader2Icon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { Input } from "@/components/ui/input";
import { useDebounce, useFeatureDashboard } from "@/libs/hooks";
import { dummyFeatures } from "@/libs/entities";

export const FeatureHeaderSection: React.FC = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
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
        Untuk membuat konten dengan kilat, kami menyediakan fitur unggulan kami
        yaitu sebuah Artificial Intelegent yang dapat mempermudah anda untuk
        membuat konten media sosial yang luar biasa!
      </p>
      <div className="relative">
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
    </section>
  );
};
