import * as React from "react";
import { FeatureCard } from "./feature.card";

const featuresTiktok = [
  {
    title: "Konten TikTok Post",
    description:
      "Temukan ide menarik untuk membuat postingan TikTok menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Konten TikTok Livestream",
    description:
      "Temukan ide menarik untuk membuat Livestream TikTok menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Deskripsi Produk TikTok",
    description:
      "Buat sebuah deskripsi produk yang dapat menarik perhatian pelanggan dan memiliki kesan yang efektif.",
  },
];

export const FeaturesTiktok = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-6">
      {featuresTiktok.map(({ title, description }, index) => (
        <FeatureCard key={index} title={title} description={description} />
      ))}
    </div>
  );
};
