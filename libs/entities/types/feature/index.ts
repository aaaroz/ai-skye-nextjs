export type TFeature = {
  id: number;
  title: string;
  headline: string;
  description: string;
  slug: string;
  prompts: { [key: string]: string }[];
  category: string;
};
