import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = {
  discount?: string;
} & React.HTMLProps<HTMLDivElement>;

export default function Product({ discount, ...rest }: ProductProps) {
  return (
    <div
      className={`product relative w-full max-w-56 ${rest.className || ""}`}
      {...rest}>
      {discount && <ProductDiscount discount={discount} />}
      <ProductImage />
      <ProductContent />
    </div>
  );
}
// small issue `rest.className`
