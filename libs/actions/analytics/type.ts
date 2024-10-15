export type TAnalyticsResponse = {
  status: string;
  status_code: number;
  statusCode?: number;
  error?: string;
  data: {
    monthlyVisitorCounts?: TMonthlyVisitorsCount;
    totalVisitorCount?: TTotalVisitorsCount;
  };
};

export type TTotalVisitorsCount = {
  mobile: number;
  desktop: number;
};

export type TMonthlyVisitorsCount = {
  month: string;
  desktop: number;
  mobile: number;
}[];

export type TTransactionData = {
  monthYear: string;
  transactionCount: number;
};

export type TMonthlyTransactions = {
  status: number;
  body: {
    success: boolean;
    message: string;
    data: TTransactionData[];
  };
};
