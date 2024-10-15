import * as React from "react";
import { TUserTransaction } from "@/libs/actions/transaction/type";

export type TAdminDashboardContext = {
  transactionData: TUserTransaction[];
  setTransactionData: React.Dispatch<React.SetStateAction<TUserTransaction[]>>;
};

export type TAdminDashboardContextProvider = {
  children: React.ReactNode;
};
