export type TUserAdminDashboard = {
  id: string;
  name: string;
  birthDate: string;
  joindate: string;
  phoneNumber: string;
  position: string;
  imgUrl?: string;
  company?: string;
  city?: string;
};

export type TGetUsersResponse = {
  success: boolean;
  status_code: number;
  totalUsers: number;
  error?: string;
  usersList: TUserAdminDashboard[];
};
