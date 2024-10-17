export const translateMonthToEnglish = (dateStr: string): string => {
  const monthsMap: { [key: string]: string } = {
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

  Object.keys(monthsMap).forEach((indonesianMonth) => {
    const englishMonth = monthsMap[indonesianMonth];
    dateStr = dateStr.replace(indonesianMonth, englishMonth);
  });

  return dateStr;
};
