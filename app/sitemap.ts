import { MetadataRoute } from "next";
import { baseUrl } from "@/libs/entities";

const sitemap = (): MetadataRoute.Sitemap => {
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
  ];
};

export default sitemap;
