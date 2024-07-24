import { cn } from "@utils";

type ProductDiscountProps = {
  discount?: string;
};

const ProductDiscount = ({ discount }: ProductDiscountProps) => {
  return (
    <div
      className={cn(
        ["absolute top-0 left-0"],
        ["p-1 px-4 text-xs"],
        ["rounded-ss-lg rounded-ee-lg", ["bg-primary text-white"]],
      )}>
      {discount}
    </div>
  );
};

export default ProductDiscount;
