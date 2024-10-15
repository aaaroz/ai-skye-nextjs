import { TProfileData } from "@/libs/entities";

export type TProfileResponse = {
  success: boolean;
  statuscode: number;
  status: string;
  totalFeatures: number;
  data: TProfileData;
  error?: string;
};
