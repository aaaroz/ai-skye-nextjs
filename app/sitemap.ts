import { getAllFeatures } from "@/libs/actions";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const response = await getAllFeatures();

  const featuresRoute = response.map(({ slug }) => {
    return {
      url: `${baseUrl}/features/${slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
    },
    ...featuresRoute,
  ];
};

export default sitemap;
