import * as React from "react";
import { Button } from "@/components/ui/button";
import { CpuIcon } from "lucide-react";
import { CardFeatureExample } from "./card.feature.example";

const featuresExamples = [
  {
    title: "Konten TikTok Post",
    description:
      " Temukan ide menarik untuk membuat postingan tiktok menggunakan AI dengan mudah dan efisien",
    category: " TikTok & TikTok Shop",
  },
  {
    title: "Konten TikTok Livestream",
    description:
      " Temukan ide menarik untuk membuat livestream tiktok menggunakan AI dengan mudah dan efisien",
    category: " TikTok & TikTok Shop",
  },
  {
    title: "Deskripsi Produk TikTok Shop",
    description:
      " Temukan ide menarik untuk membuat deskripsi produk tiktok menggunakan AI dengan mudah dan efisien",
    category: " TikTok & TikTok Shop",
  },
];

export const FirstStepExample: React.FC = (): React.ReactElement => {
  return (
    <div className="order-2 md:order-none relative w-full p-4 space-y-6 rounded-md bg-neutral-50 shadow">
      <div className="space-y-1.5 w-full h-[500px] md:h-[300px] overflow-hidden [mask:linear-gradient(90deg,white_60%,transparent)] md:[mask:linear-gradient(90deg,white_30%,transparent)] ">
        <section className="space-y-1 p-2">
          <div className="flex gap-2 items-center">
            <CpuIcon className="size-4" />
            <h1 className="text-sm font-bold"> Artificial Intelegent</h1>
          </div>
          <p className="text-xs text-muted-foreground">
            Untuk membuat konten dengan kilat, kami menyediakan fitur unggulan
            kami yaitu sebuah Artificial Intelegent yang dapat mempermudah anda
            untuk membuat konten media sosial yang luar biasa!
          </p>
          <div className="flex gap-3 items-center">
            <Button className="text-xs font-medium px-2 h-6" size="sm">
              Semua Kategori
            </Button>
            <Button
              className="text-xs font-medium px-2 h-6"
              size="sm"
              variant="ghost"
            >
              TikTok & TikTok Shop
            </Button>
            <Button
              className="text-xs font-medium px-2 h-6"
              size="sm"
              variant="ghost"
            >
              Instagram
            </Button>
            <Button
              className="text-xs font-medium px-2 h-6"
              size="sm"
              variant="ghost"
            >
              Shopee
            </Button>
          </div>
        </section>
        <section className="space-y-1 p-2">
          <h1 className="text-sm font-semibold">TikTok & TikTok Shop</h1>
          <p className="text-xs">
            Dapatkan ide konten yang menarik untuk TikTok dan TikTok Shop anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 py-2">
            {featuresExamples.map(({ title, description, category }, index) => (
              <CardFeatureExample
                key={index}
                title={title}
                description={description}
                category={category}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
