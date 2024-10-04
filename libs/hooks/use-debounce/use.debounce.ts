import { useState, useEffect } from "react";

export const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsLoading(false);
    }, milliSeconds);

    setIsLoading(true);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return { debouncedValue, isLoading };
};
