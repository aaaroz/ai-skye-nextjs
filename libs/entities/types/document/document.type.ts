export type TDocument = {
  timestamp: string;
  response: string;
  id: string;
  category: "ecommerce" | "tiktok" | "instagram";
  tokensUsed: number;
  title: string;
};
