import { atom } from "@mongez/react-atom";
import { queryString } from "@mongez/react-router";
import { getCategories, getProducts } from "../../home/services/home-service";
import { Category, Product } from "../../utils/types";

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
  getCategories: () => void;
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
        .then(response => {
          console.log(response);
          shopAtom.update({
            ...shopAtom.value,
            products: response.data.products,
            loadingProducts: false,
            currentPage: parseInt(queryString.get("page", 1)),
            totalPages: parseInt(response.data.paginationInfo.pages || 1),
          });
        })
        .catch(error => {
          console.error(error);
          shopAtom.change("loadingProducts", false);
          shopAtom.change("error", "Error Fetch products");
        });
    },
    getCategories: () => {
      shopAtom.change("loadingCategories", true);
      getCategories()
        .then(response => {
          console.log(response);
          shopAtom.change("categories", response.data.categories);
          shopAtom.change("loadingCategories", false);
        })
        .catch(error => {
          console.error(error);
          shopAtom.change("loadingCategories", false);
          shopAtom.change("error", "Error Fetch categories");
        });
    },
  },
});
