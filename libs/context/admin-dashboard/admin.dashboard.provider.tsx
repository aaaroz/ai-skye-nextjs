"use client";
import * as React from "react";
import { TAdminDashboardContextProvider } from "./type";
import { AdminDashboardContext } from "./admin.dashboard.context";
import { TUserTransaction } from "@/libs/actions/transaction/type";
import { getTransactionAdmin } from "@/libs/actions";

export const AdminDashboardContextProvider = ({
  children,
}: TAdminDashboardContextProvider) => {
  const [transactionData, setTransactionData] = React.useState<
    TUserTransaction[]
  >([]);

  const fetchData = React.useCallback(async () => {
    const transaction = await getTransactionAdmin();
    if (transaction) {
      setTransactionData(transaction as TUserTransaction[]);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AdminDashboardContext.Provider
      value={{ transactionData, setTransactionData }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};
