import * as React from "react";
import { FeatureCard } from "./feature.card";

const featuresShopee = [
  {
    title: "Konten Shopee Post",
    description:
      "Temukan ide menarik untuk membuat postingan Shopee menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Konten Shopee Livestream",
    description:
      "Temukan ide menarik untuk membuat Livestream Shopee menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Deskripsi Produk Shopee",
    description:
      "Buat sebuah deskripsi produk yang dapat menarik perhatian pelanggan dan memiliki kesan yang efektif.",
  },
];

export const FeaturesShopee = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-6">
      {featuresShopee.map(({ title, description }, index) => (
        <FeatureCard key={index} title={title} description={description} />
      ))}
    </div>
  );
};
