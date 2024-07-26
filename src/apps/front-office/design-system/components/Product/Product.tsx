import { IProductContent } from "shared/contracts/IProductContent";
import ProductContent from "./ProductContent";
import ProductDiscount from "./ProductDiscount";
import ProductImage from "./ProductImage";

export type ProductProps = {
  image?: string;
  body: IProductContent;
} & React.HTMLProps<HTMLDivElement>;

export default function Product({
  image,
  body,
  className = "",
  ...htmlProps
}: ProductProps) {
  return (
    <div
      className={`product relative w-full max-w-56 ${className}`}
      {...htmlProps}>
      {body.discount && <ProductDiscount discount={body.discount} />}
      <ProductImage imageUrl={image} />
      <ProductContent {...body} />
    </div>
  );
}

// small issue `rest.className`
