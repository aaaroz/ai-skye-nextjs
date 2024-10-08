export type TDocument = {
  id: string;
  title: string;
  category: "ecommerce" | "tiktok" | "instagram";
  createdAt: Date;
  wordUsed: number;
  text: string;
};
