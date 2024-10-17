import { MetadataRoute } from "next";
import { getAllFeatures } from "@/libs/actions";
import { baseUrl } from "@/libs/entities";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const response = await getAllFeatures();

  const featuresRoute = response.map(({ slug }) => {
    return {
      url: `${baseUrl}/features/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...featuresRoute,
  ];
};

export default sitemap;
