import { useOnce } from "@mongez/react-hooks";
import { getProduct } from "app/shop/services";
import { Product } from "app/shop/utils";
import { ReactNode, useState } from "react";

type ProductDetailsParams = {
  id: string;
};

type DataState = {
  loading: boolean;
  error: ReactNode;
  product?: Product;
};

export function useProductDetails(params: ProductDetailsParams) {
  const [data, setData] = useState<DataState>({
    loading: true,
    error: null,
    product: undefined,
  });

  useOnce(() => {
    getProduct(params.id)
      .then(data => {
        setData({
          loading: false,
          error: null,
          product: data.product,
        });
      })
      .catch(error => {
        setData({
          loading: false,
          error: error,
          product: undefined,
        });
      });
  });

  return {
    product: data.product,
    error: data.error,
    isLoading: data.loading,
  };
}
