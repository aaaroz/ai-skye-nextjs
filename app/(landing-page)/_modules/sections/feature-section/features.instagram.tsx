import * as React from "react";
import { FeatureCard } from "./feature.card";

const featuresInstagram = [
  {
    title: "Konten Instagram Post",
    description:
      "Temukan ide menarik untuk membuat postingan instagram menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Konten Instagram Story",
    description:
      "Temukan ide menarik untuk membuat story instagram menggunakan AI dengan mudah dan efisien",
  },
  {
    title: "Deskripsi Instagram",
    description:
      "Buat sebuah deskripsi produk yang dapat menarik perhatian pelanggan dan memiliki kesan yang efektif.",
  },
];

export const FeaturesInstagram = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
      {featuresInstagram.map(({ title, description }, index) => (
        <FeatureCard key={index} title={title} description={description} />
      ))}
    </div>
  );
};
