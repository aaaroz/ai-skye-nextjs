import * as React from "react";

export const TokenCard: React.FC = (): React.ReactElement => {
  return (
    <div className="w-fit text-center rounded px-6 py-4 bg-sky-100">
      <h1 className="text-xl font-semibold">Sisa Kata</h1>
      <h2 className="text-4xl font-bold">3000</h2>
    </div>
  );
};
