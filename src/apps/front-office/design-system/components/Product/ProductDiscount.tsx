type ProductDiscountProps = {
  discount: number;
};

const ProductDiscount = ({ discount }: ProductDiscountProps) => {
  const discountBadge = `Save ${discount}%`;

  return (
    <div className="absolute top-0 left-0 p-1 px-4 text-xs rounded-ss-lg rounded-ee-lg bg-primary text-white">
      {discountBadge}
    </div>
  );
};

export default ProductDiscount;
