import { atom } from "@mongez/react-atom";
import { IProduct } from "shared/contracts/IProduct";

type ProductQuickViewType = {
  visible: boolean;
  product: IProduct | null;
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

export const showProductQuickView = (product: IProduct) => {
  ProductQuickViewAtom.merge({
    product,
  });
};

export default ProductQuickViewAtom;
