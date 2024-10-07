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

export const description = "A bar chart";

const chartData = [
  { month: "January", transactionCount: 186 },
  { month: "February", transactionCount: 305 },
  { month: "March", transactionCount: 237 },
  { month: "April", transactionCount: 73 },
  { month: "May", transactionCount: 209 },
  { month: "June", transactionCount: 214 },
  { month: "July", transactionCount: 186 },
  { month: "August", transactionCount: 305 },
  { month: "September", transactionCount: 237 },
  { month: "Oktober", transactionCount: 209 },
  { month: "November", transactionCount: 73 },
  { month: "Desember", transactionCount: 214 },
];

const chartConfig = {
  transactionCount: {
    label: "Transaksi",
    color: "rgb(7 89 133)",
  },
} satisfies ChartConfig;

export const ChartTransaction: React.FC = (): React.ReactElement => (
  <Card className="w-full lg:col-span-2">
    <CardHeader>
      <CardTitle className="tex-tbase md:text-lg">Grafik Transaksi</CardTitle>
      <CardDescription>January - Desember 2024</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig} className="w-full h-[200px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
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
