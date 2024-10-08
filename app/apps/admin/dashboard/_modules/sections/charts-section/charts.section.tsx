import * as React from "react";
import { ChartTransaction } from "./chart.transaction";
import { ChartVisitors } from "./chart.visitors";

export const ChartsSection: React.FC = (): React.ReactElement => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartTransaction />
      <ChartVisitors />
    </section>
  );
};
