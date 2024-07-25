import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = {
  discount?: string;
} & React.HTMLProps<HTMLDivElement>;

export default function Product({
  discount,
  className = "",
  ...htmlProps
}: ProductProps) {
  return (
    <div
      className={`product relative w-full max-w-56 ${className}`}
      {...htmlProps}>
      {discount && <ProductDiscount discount={discount} />}
      <ProductImage />
      <ProductContent />
    </div>
  );
}
// small issue `rest.className`
