import { TTransaction } from "@/libs/entities";

export type TTransactionsResponse = {
  success: string;
  status: number;
  body: {
    transactions: TTransaction[];
    message?: string;
  };
};

export type TSingleTransactionResponse = {
  status: number;
  body: {
    success: boolean;
    transaction: TTransaction;
    message?: string;
  };
};

export type TTransactionAdmin = {
  transaction_id: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  packagename?: string;
  order_id: string;
  status: string;
  payment_type?: string;
  gross_amount?: number;
  amount_notax?: number;
  createdAt: string;
  updatedAt: string;
};

export type TUserTransaction = {
  user_id: string;
  transactions: TTransactionAdmin[];
};

export type TAdminResponseBody = {
  success: boolean;
  status: number;
  error?: string;
  body: TUserTransaction[];
};
