import { IProduct } from "shared/contracts/IProduct";
import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = IProduct & React.HTMLProps<HTMLDivElement>;

export default function Product({
  images,
  status,
  body,
  className = "",
  ...htmlProps
}: ProductProps) {
  return (
    <div
      className={`product relative w-full max-w-56 overflow-hidden ${className}`}
      {...htmlProps}>
      {/* What is best render component condionally or within component check, if not discoutn return null? */}
      <ProductDiscount status={status} discount={body.discount} />
      <ProductImage images={images} />
      <ProductContent {...body} />
    </div>
  );
}

// small issue `rest.className`
