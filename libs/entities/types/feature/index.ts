export type TFeature = {
  id: string;
  title: string;
  headline: string;
  description: string;
  slug: string;
  prompts: { [key: string]: string }[];
  category: string;
};
