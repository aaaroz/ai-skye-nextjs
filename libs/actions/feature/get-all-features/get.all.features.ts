import { baseApiUrl, TFeaturesResponse } from "@/libs/entities";

export const getAllFeatures = async () => {
  const res: TFeaturesResponse = await fetch(`${baseApiUrl}/api/features`, {
    method: "GET",
    cache: "force-cache",
  }).then((response) => response.json());
  if (!res.success) {
    console.error(res);
    if (res.error) {
      throw new Error(res.error);
    }
    throw new Error("Network response was not ok");
  }

  return res.data;
};
