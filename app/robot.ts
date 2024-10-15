import { MetadataRoute } from "next";

export const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/features"],
      disallow: [],
    },
  };
};
export default robots;
