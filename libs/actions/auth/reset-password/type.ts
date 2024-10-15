export type TResetPasswordResponse = {
  status: string;
  statusCode: number;
  error?: string;
  success?: boolean;
  data: {
    userId: string;
    message: string;
  };
};
