import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: any;
};

type FetchResult<T> = {
  isLoading: boolean;
  error: any;
  data: T | null;
};

export function useFetch<T = any>(
  fetchCallback: () => Promise<T>,
): FetchResult<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useOnce(() => {
    fetchCallback()
      .then(data => {
        setState({
          data,
          isLoading: false,
          error: null,
        });
      })
      .catch(error => {
        setState({
          data: null,
          isLoading: false,
          error,
        });
      });
  });

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
