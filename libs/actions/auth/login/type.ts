export type TLoginResponse = {
  success: boolean;
  status: number;
  data: {
    id: string;
    name: string;
    role: string;
    token: string;
    wordCredits: number;
    wordUsed: number;
  };
  message: string;
};
