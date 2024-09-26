import { queryString } from "@mongez/react-router";
import { getProducts } from "app/shop/services";
import { Product } from "app/shop/utils/types";
import { useEffect, useState } from "react";

export default function useFetchShopData(currentPage: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    setIsLoading(true);
    getProducts({
      page: currentPage,
      limit: 20,
      ...queryString.all(),
    })
      .then(response => {
        setProducts(response.products);
        setPagination(response.paginationInfo);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [currentPage]);
  return { loading, error, products, pagination };
}
