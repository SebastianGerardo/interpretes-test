import { useState } from "react";

export const useAsyncState = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsync = async (promise: Promise<T>): Promise<T | undefined> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await promise;
      setData(data);
      return data;
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    error,
    setError,
    handleAsync,
    data,
    setData
  };
};
