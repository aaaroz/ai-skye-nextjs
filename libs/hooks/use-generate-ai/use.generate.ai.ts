import * as React from "react";
import { GenerateAIContext } from "@/libs/context";

export const useGenerateAI = () => {
  const context = React.useContext(GenerateAIContext);
  if (!context) {
    throw new Error("useGenerateAI must be used within a GenerateAIProvider");
  }
  return context;
};
