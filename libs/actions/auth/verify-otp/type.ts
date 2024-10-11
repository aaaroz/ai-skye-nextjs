export type TVerifyRegisterResponse = {
  success: boolean;
  message: string;
  error?: string;
};

export type TVerifyForgotPasswordResponse = {
  status: string;
  success?: boolean;
  data: {
    message: string;
    userId: string;
  };
  error?: string;
};
