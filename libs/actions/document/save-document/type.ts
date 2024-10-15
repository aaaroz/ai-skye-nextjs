export type TSaveDocumentResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  error?: string;
  details?: string;
};
