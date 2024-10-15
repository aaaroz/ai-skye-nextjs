export type TUser = {
  id: string;
  name: string;
  role: string;
  token: string;
  wordCredits: number;
  wordUsed: number;
  image_url: string;
  email: string;
  emailVerified: Date | null;
};

export type TAuthResponse = {
  success: boolean;
  status: number;
  data: TUser;
  message: string;
  error?: string;
};
