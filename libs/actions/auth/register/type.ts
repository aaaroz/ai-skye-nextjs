export type TRegisterResponse = {
  success: boolean;
  data: {
    status: string;
    statusCode: number;
    error?: string;
    data: {
      id: string;
      name: string;
      phoneNumber: string;
      wordCredits: number;
    };
  };
};
