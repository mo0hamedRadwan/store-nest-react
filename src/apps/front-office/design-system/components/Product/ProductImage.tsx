import { Image } from "src/apps/front-office/utils/types";
import ProductActions from "./ProductActions";

type ProductImageProps = {
  images: Image[];
};

const ProductImage = ({ images }: ProductImageProps) => {
  return (
    <div className="product-image relative group">
      <img
        className="w-fit opacity-100 transition-all duration-300 group-hover/product:opacity-0 group-hover/product:invisible ease-in"
        src={images[0].url}
      />

      {images.slice(1).map(image => (
        <img
          key={image.id}
          className="w-fit absolute -z-20 top-0 left-0 invisible opacity-0 transition-all duration-300 group-hover/product:opacity-100 group-hover/product:visible ease-in group-hover/product:scale-105"
          src={image.url}
        />
      ))}

      <ProductActions />
    </div>
  );
};

export default ProductImage;
