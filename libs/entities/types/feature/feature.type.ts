import { TPrompt } from "../prompt";

export type TFeature = {
  id: string;
  title: string;
  headline: string;
  description: string;
  slug: string;
  prompts: { [key: string]: string }[];
  category: string;
};

export type Feature = {
  id: string;
  categoryname: string;
  featuresname: string;
  slug: string;
  deskripsi: string;
  subdeskripsi: string;
  data: TPrompt[];
};

export type TFeaturesResponse = {
  success: boolean;
  statuscode: number;
  totalFeatures: number;
  data: Feature[];
  error?: string;
};

export type TSingleFeatureResponse = {
  success: boolean;
  statuscode: number;
  totalFeatures: number;
  data: Feature;
  error?: string;
};
