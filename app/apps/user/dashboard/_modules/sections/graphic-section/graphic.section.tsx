import * as React from "react";
import { GraphicChart } from "./graphic.chart";

export const GraphicSection: React.FC = (): React.ReactElement => {
  return (
    <section className="p-4 space-y-4 rounded-md bg-neutral-50">
      <GraphicChart />
    </section>
  );
};
