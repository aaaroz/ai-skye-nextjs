import { MetadataRoute } from "next";

export const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/features"],
      disallow: [],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
};
export default robots;
