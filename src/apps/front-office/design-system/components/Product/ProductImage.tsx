import { DEFAULT_IMAGE } from "shared/constants";
import ProductActions from "./ProductActions";

type ProductImageProps = {
  images: {
    foreground?: string;
    background?: string;
  };
};

const ProductImage = (
  { images }: ProductImageProps = {
    images: {
      foreground: DEFAULT_IMAGE,
      background: DEFAULT_IMAGE,
    },
  },
) => {
  return (
    <div className="product-image relative group">
      <img
        className="w-fit opacity-100 transition-all duration-300 group-hover/product:opacity-0 group-hover/product:invisible ease-in"
        src={images.foreground}
      />
      <img
        className="w-fit absolute -z-20 top-0 left-0 invisible opacity-0 transition-all duration-300 group-hover/product:opacity-100 group-hover/product:visible ease-in group-hover/product:scale-105"
        src={images.background}
      />

      <ProductActions />
    </div>
  );
};

export default ProductImage;
