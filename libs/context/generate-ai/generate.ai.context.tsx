"use client";
import React, { createContext, useState, ReactNode } from "react";

type TCompletionResponse = {
  message: string;
  isFinal?: boolean;
  success?: boolean;
  totalWordsGenerated?: number;
  categoryprompt?: string;
  featuresname?: string;
  newWordCredits?: number;
  newWordUsed?: number;
  wordUsedToday?: number;
};

interface GenerateAIContextType {
  isGenerating: boolean;
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  resultText: string;
  setResultText: React.Dispatch<React.SetStateAction<string>>;
  completionResponse: TCompletionResponse | null;
  setCompletionResponse: React.Dispatch<
    React.SetStateAction<TCompletionResponse | null>
  >;
}

export const GenerateAIContext = createContext<GenerateAIContextType | null>(
  null
);

export const GenerateAIProvider = ({ children }: { children: ReactNode }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultText, setResultText] = useState("");
  const [completionResponse, setCompletionResponse] =
    useState<TCompletionResponse | null>(null);

  return (
    <GenerateAIContext.Provider
      value={{
        isGenerating,
        setIsGenerating,
        resultText,
        setResultText,
        completionResponse,
        setCompletionResponse,
      }}
    >
      {children}
    </GenerateAIContext.Provider>
  );
};
