import { useEffect, useState } from "react";
import { shopDataAtom } from "../atoms/shop-data.atom";
import { getShopPageData } from "../services/shop-service";
import { Product } from "../utils/types";

export type ShopData = {
  products: Product[];
  filters: {
    type: string;
    label: string;
    data: [];
  }[];
  sortOptions: {
    text: string;
    value: string;
  }[];
  breadcrumbs: {
    text: string;
    url: string;
  }[];
  paginationInfo: {
    limit: number;
    page: number;
    pages: number;
    result: number;
    total: number;
  };
};

const useFetchShopData = () => {
  const [data, setData] = useState<ShopData>({
    products: [],
    filters: [],
    sortOptions: [],
    breadcrumbs: [],
    paginationInfo: {
      limit: 0,
      page: 0,
      pages: 0,
      result: 0,
      total: 0,
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async query => {
    setLoading(true);

    getShopPageData(query)
      .then(response => {
        shopDataAtom.update(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("");
  }, []);

  return { data, loading, error, fetch };
};

export default useFetchShopData;
