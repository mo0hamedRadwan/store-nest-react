import { atom } from "@mongez/react-atom";
import { getProduct } from "app/shop/services";
import { Product } from "../utils/types";

type ProductQuickViewType = {
  opened: boolean;
  isLoading: boolean;
  product?: Product;
};

type ProductQuickViewActions = {
  close: () => void;
  open: (productId: number) => void;
};

export const productQuickViewAtom = atom<
  ProductQuickViewType,
  ProductQuickViewActions
>({
  key: "ProductQuickView",
  default: {
    opened: false,
    isLoading: false,
    product: undefined,
  },
  actions: {
    close: () => productQuickViewAtom.change("opened", false),
    open: (productId: number) => {
      productQuickViewAtom.update({
        isLoading: true,
        opened: true,
        product: undefined,
      });

      getProduct(productId).then(({ product }) => {
        productQuickViewAtom.merge({
          isLoading: false,
          product,
        });
      });
    },
  },
});
