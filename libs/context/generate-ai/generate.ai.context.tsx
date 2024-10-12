"use client";
import React, { createContext, useState, ReactNode } from "react";

// Define the context type
interface GenerateAIContextType {
  isGenerating: boolean;
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  resultText: string;
  setResultText: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values (they will be updated by the provider)
export const GenerateAIContext = createContext<GenerateAIContextType | null>(null);

// Create the provider component
export const GenerateAIProvider = ({ children }: { children: ReactNode }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultText, setResultText] = useState("");

  return (
    <GenerateAIContext.Provider
      value={{ isGenerating, setIsGenerating, resultText, setResultText }}
    >
      {children}
    </GenerateAIContext.Provider>
  );
};
