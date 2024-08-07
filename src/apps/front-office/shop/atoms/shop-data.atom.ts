import { atom } from "@mongez/react-atom";
import { ShopData } from "../hooks/use-fetch-shop-data";

export const shopDataAtom = atom<
  ShopData & {
    fetch: (query: any) => void;
  }
>({
  key: "shopData",
  default: {
    breadcrumbs: [],
    filters: [],
    products: [],
    paginationInfo: {
      limit: 0,
      page: 0,
      pages: 0,
      result: 0,
      total: 0,
    },
    sortOptions: [],
    fetch: () => {},
  },
});
