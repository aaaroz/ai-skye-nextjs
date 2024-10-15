import { TDocument } from "@/libs/entities";

export type TGetSingleDocumentResponse = {
  success: boolean;
  data: TDocument;
  error?: string;
  details?: string;
};
