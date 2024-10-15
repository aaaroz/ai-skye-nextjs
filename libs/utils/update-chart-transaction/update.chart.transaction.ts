/* eslint-disable @typescript-eslint/no-unused-vars */

import { TTransactionData } from "@/libs/actions/analytics/type";

interface NewData {
  monthYear: string;
  transactionCount: number;
}

export function updateChartDataTransaction(
  chartData: TTransactionData[],
  newData: NewData[]
): TTransactionData[] {
  // Buat map bulan dalam bahasa Inggris untuk mencocokkan nama bulan dengan format data baru
  const monthMap: { [key: string]: string } = {
    Januari: "January",
    Februari: "February",
    Maret: "March",
    April: "April",
    Mei: "May",
    Juni: "June",
    Juli: "July",
    Agustus: "August",
    September: "September",
    Oktober: "October",
    November: "November",
    Desember: "December",
  };

  // Perbarui atau tambahkan data transaksi baru
  newData.forEach((newEntry) => {
    const [_, month] = newEntry.monthYear.split("-");
    const englishMonth = monthMap[month] || month; // Konversi bulan ke bahasa Inggris

    const existingDataIndex = chartData.findIndex(
      (entry) => entry.monthYear === englishMonth
    );

    if (existingDataIndex !== -1) {
      // Jika bulan sudah ada, perbarui transactionCount
      chartData[existingDataIndex].transactionCount = newEntry.transactionCount;
    } else {
      // Jika bulan tidak ada, tambahkan entri baru
      chartData.push({
        monthYear: englishMonth,
        transactionCount: newEntry.transactionCount,
      });
    }
  });

  return chartData;
}
