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
});

export const showProductQuickView = (product: IProduct) => {
  ProductQuickViewAtom.merge({
    visible: true,
    product,
  });
};

export default ProductQuickViewAtom;
