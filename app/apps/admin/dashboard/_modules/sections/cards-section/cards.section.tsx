"use client";
import * as React from "react";
import { cardData } from "./card-data";
import { CardItem } from "./card-item";
import { useAdminDashboard, useFeatures } from "@/libs/hooks";
import { TTransactionAdmin } from "@/libs/actions/transaction/type";

interface CardsSectionProps {
  totalVisitors: number;
  totalUsers: number;
}

export const CardsSection: React.FC<CardsSectionProps> = ({
  totalVisitors,
  totalUsers,
}): React.ReactElement => {
  const { features } = useFeatures();
  const { transactionData } = useAdminDashboard();

  const transactions: TTransactionAdmin[] = [];
  transactionData.forEach((userData) => {
    transactions.push(...userData.transactions);
  });

  if (features) {
    cardData[0].count = features.length;
  }
  if (totalUsers) {
    cardData[1].count = totalUsers;
  }
  if (transactions.length > 1) {
    cardData[2].count = transactions.length;
  }
  if (totalVisitors) {
    cardData[3].count = totalVisitors;
  }

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
