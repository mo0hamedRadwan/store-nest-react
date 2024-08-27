import { Product as ProductType } from "src/apps/front-office/utils/types";
import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = {
  product: ProductType;
} & React.HTMLProps<HTMLDivElement>;

export default function Product({
  product,
  className = "",
  ...htmlProps
}: ProductProps) {
  return (
    <div
      {...htmlProps}
      className={`product relative w-full max-w-56 overflow-hidden shadow-gray-300 p-4 shadow-sm ${className}`}>
      {/* What is best render component condionally or within component check, if not discoutn return null? */}
      <ProductDiscount
        category={product?.category}
        discount={product?.discount?.percentage}
      />
      <ProductImage images={product?.images} />
      <ProductContent {...product} />
    </div>
  );
}

// small issue `rest.className`
