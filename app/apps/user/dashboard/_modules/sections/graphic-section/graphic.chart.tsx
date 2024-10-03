"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const getTwoMonthsDates = () => {
  const now = new Date();
  const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 1);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const dates = [];

  for (
    let day = twoMonthsAgo;
    day <= lastDayOfMonth;
    day.setDate(day.getDate() + 1)
  ) {
    dates.push({
      date: day.toISOString().split("T")[0],
      word: Math.floor(Math.random() * 800 + 100),
    });
  }

  return dates;
};

const chartData: { date: string; word: number }[] = getTwoMonthsDates();

const chartConfig = {
  counts: {
    label: "Kata yang dihasilkan",
  },
  words: {
    label: "word",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const GraphicChart: React.FC = (): React.ReactElement => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Grafik AI Generator</CardTitle>
          <CardDescription>
            Monitor pembuatan kata harian anda selama 2 bulan terakhir.
          </CardDescription>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Kata yang dihasilkan
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              0
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={16}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("id", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="counts"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("id", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={"word"} fill={`rgb(7 89 133)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
