import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import { Product } from "apps/front-office/shop/utils/types";
import { useState } from "react";
import { getProducts } from "../../home/services/home-service";

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
  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    getProducts({
      ...queryString.all(),
      limit: 20,
    })
      .then(response => {
        setCurrentItems(response.data.products);
        setPagination(response.data.paginationInfo);

        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  });
  return { loading, error, data: currentItems, pagination };
};

export default useFetchShopData;
