import { MetadataRoute } from "next";
import { getAllFeatures } from "@/libs/actions";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const response = await getAllFeatures();
  const urlProd = "https://kontenkilat.id";

  const featuresRoute = response.map(({ slug }) => {
    return {
      url: `${urlProd}/features/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: urlProd,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${urlProd}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...featuresRoute,
  ];
};

export default sitemap;
