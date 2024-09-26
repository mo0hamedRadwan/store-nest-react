import { atom } from "@mongez/react-atom";
import { queryString } from "@mongez/react-router";
import { getProducts } from "app/shop/services";
import { Category, Product } from "app/shop/utils";

type ShopDataType = {
  products: Product[];
  categories: Category[];
  totalPages: number;
  currentPage: number;
  loadingProducts: boolean;
  loadingCategories: boolean;
  error: string | null;
};

type ShopActionsType = {
  getProducts: (params?: any) => void;
};

export const shopAtom = atom<ShopDataType, ShopActionsType>({
  key: "shop",
  default: {
    products: [],
    categories: [],
    loadingProducts: false,
    loadingCategories: false,
    error: null,
  },
  actions: {
    getProducts: (params: any) => {
      shopAtom.change("loadingProducts", true);
      getProducts({
        ...queryString.all(),
        page: queryString.get("page", 1),
        limit: 20,
        ...params,
      })
        .then(({ products, paginationInfo }) => {
          shopAtom.update({
            ...shopAtom.value,
            products: products,
            loadingProducts: false,
            currentPage: parseInt(queryString.get("page", 1)),
            totalPages: paginationInfo.pages || 1,
          });
        })
        .catch(error => {
          console.error(error);
          shopAtom.change("loadingProducts", false);
          shopAtom.change("error", "Error Fetch products");
        });
    },
  },
});
