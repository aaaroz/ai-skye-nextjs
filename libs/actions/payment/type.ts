export type TPaymentResponse = {
  status: number;
  ok?: boolean;
  token?: string;
  message?: string;
  body?: {
    statusCode: number;
    success: boolean;
    order_id: string;
    token: string;
    error?: string;
  };
};
