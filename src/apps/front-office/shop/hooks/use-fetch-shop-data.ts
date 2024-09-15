import { Product } from "apps/front-office/shop/utils/types";
import { useEffect, useState } from "react";
import { getProducts } from "../../home/services/home-service";
import { shopDataAtom } from "../atoms/shop-data.atom";

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

    getProducts(query)
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
