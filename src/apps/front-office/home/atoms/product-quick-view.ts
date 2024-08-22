import { atom } from "@mongez/react-atom";
import { Product } from "../../utils/types";

type ProductQuickViewType = {
  visible: boolean;
  product: Product | null;
};

const ProductQuickViewAtom = atom<ProductQuickViewType>({
  key: "ProductQuickView",
  default: {
    visible: false,
    product: null,
  },
  actions: {
    close: () => ProductQuickViewAtom.change("visible", false),
    show: () => ProductQuickViewAtom.change("visible", true),
  },
});

export const showProductQuickView = (product: Product) => {
  ProductQuickViewAtom.merge({
    product,
  });
};

export default ProductQuickViewAtom;
