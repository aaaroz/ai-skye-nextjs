"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getMonthlyTransactions } from "@/libs/actions";
import { TTransactionData } from "@/libs/actions/analytics/type";
import { updateChartDataTransaction } from "@/libs/utils";

export const description = "A bar chart";

const chartData = [
  { monthYear: "January", transactionCount: 0 },
  { monthYear: "February", transactionCount: 0 },
  { monthYear: "March", transactionCount: 0 },
  { monthYear: "April", transactionCount: 0 },
  { monthYear: "May", transactionCount: 0 },
  { monthYear: "June", transactionCount: 0 },
  { monthYear: "July", transactionCount: 0 },
  { monthYear: "August", transactionCount: 0 },
  { monthYear: "September", transactionCount: 0 },
  { monthYear: "Oktober", transactionCount: 0 },
  { monthYear: "November", transactionCount: 0 },
  { monthYear: "Desember", transactionCount: 0 },
];

const chartConfig = {
  transactionCount: {
    label: "Transaksi",
    color: "rgb(7 89 133)",
  },
} satisfies ChartConfig;

export const ChartTransaction: React.FC = (): React.ReactElement => {
  const [updatedChartData, setUpdatedChartData] = React.useState<
    TTransactionData[]
  >([]);
  const fetchData = React.useCallback(async () => {
    const newChartData = await getMonthlyTransactions();
    if (newChartData) {
      const updatedChartData = updateChartDataTransaction(
        chartData,
        newChartData
      );
      setUpdatedChartData(updatedChartData);
    }
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Card className="w-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="tex-tbase md:text-lg">Grafik Transaksi</CardTitle>
        <CardDescription>January - Desember 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[200px]">
          <BarChart accessibilityLayer data={updatedChartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="monthYear"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="transactionCount" fill={`rgb(7 89 133)`} radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Menampilkan data transaksi yang terjadi di tahun ini.
        </div>
      </CardFooter>
    </Card>
  );
};
