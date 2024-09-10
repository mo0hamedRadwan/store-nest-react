/* eslint-disable unused-imports/no-unused-vars */
import { useEffect, useState } from "react";

export function useGetDeals() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [deals, setDeals] = useState<any[]>([]);

  useEffect(() => {}, []);

  return { loading, error, deals };
}
