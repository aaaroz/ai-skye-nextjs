"use client";
import * as React from "react";
import { cardData } from "./card-data";
import { CardItem } from "./card-item";
import { useAdminDashboard, useFeatures } from "@/libs/hooks";
import { getTotalUsers, getTotalVisitors } from "@/libs/actions";
import { TTransactionAdmin } from "@/libs/actions/transaction/type";

export const CardsSection: React.FC = (): React.ReactElement => {
  const { transactionData } = useAdminDashboard();
  const transactions: TTransactionAdmin[] = [];
  transactionData.forEach((userData) => {
    transactions.push(...userData.transactions);
  });

  if (transactions.length > 1) {
    cardData[2].count = transactions.length;
  }
  const { features } = useFeatures();
  if (features) {
    cardData[0].count = features.length;
  }

  const fetchData = React.useCallback(async () => {
    const totalUsers = await getTotalUsers();
    if (totalUsers) {
      cardData[2].count = totalUsers;
    }
    const visitors = await getTotalVisitors();
    if (visitors) {
      cardData[3].count = visitors.desktop + visitors.mobile;
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map(({ title, count, icon, desc, isHighlighted }, index) => (
        <CardItem
          key={index}
          title={title}
          count={count}
          icon={icon}
          desc={desc}
          isHighlighted={isHighlighted}
        />
      ))}
    </section>
  );
};
