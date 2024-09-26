import { getProducts } from "app/shop/services/products.service";
import { type Product } from "app/shop/utils/types";
import { searchHeaderAtom } from "layouts/BaseLayout/atoms/search-header.atom";
import { useState } from "react";

/**
 * the purpose of this hook is filter products by product name and category id
 */
export function useHeaderSuggestProducts() {
  const [state, setState] = useState<{
    products: Product[];
    isLoading: boolean;
    error?: string;
  }>({
    products: [],
    isLoading: true,
    error: undefined,
  });

  const filter = () => {
    setState({
      ...state,
      isLoading: true,
    });

    getProducts({
      q: searchHeaderAtom.get("q"),
      category: searchHeaderAtom.get("category"),
    }).then(({ products }) => {
      setState({
        products,
        isLoading: false,
      });
    });
  };

  return {
    filter,
    products: state.products,
    isLoading: state.isLoading,
    error: state.error,
  };
}
