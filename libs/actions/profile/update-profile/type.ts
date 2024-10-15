export type TUpdateProfileResponse = {
  status: number;
  body: {
    status: string;
    statusCode: 200;
    message: string;
    oldPhoneNumber?: string;
    userId?: string;
  };
};

export type TVerifyUpdateResponse = {
  success: boolean;
  message: string;
  status: string;
  error?: string;
};
