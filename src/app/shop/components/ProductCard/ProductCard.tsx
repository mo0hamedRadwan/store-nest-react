import { Product as ProductType } from "app/shop/utils/types";
import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = {
  product: ProductType;
  className?: string;
};

export default function ProductCard({ product, className = "" }: ProductProps) {
  return (
    <div
      className={`product relative w-full max-w-56 overflow-hidden shadow-gray-300 p-4 shadow-sm ${className}`}>
      {/* What is best render component conditionally or within component check, if not discount return null? */}
      <ProductDiscount
        category={product?.category}
        discount={product?.discount?.percentage}
      />
      <ProductImage images={product?.images} />
      <ProductContent product={product} />
    </div>
  );
}

// small issue `rest.className`
