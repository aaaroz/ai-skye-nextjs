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
