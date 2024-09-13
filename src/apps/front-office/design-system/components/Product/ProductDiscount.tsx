import { PRODUCT_STATUS, PRODUCT_STATUS_CLASSES } from "shared/constants";
import { Category } from "src/apps/front-office/utils/types";

type ProductDiscountProps = {
  discount?: number;
  category?: Category;
};

const ProductDiscount = ({
  category = {
    id: 0,
    name: "",
  },
  discount = 0,
}: ProductDiscountProps) => {
  if (!discount) return null;

  const discountBadge = `Save ${discount}%`;

  const backgroundBasedOnStatus =
    PRODUCT_STATUS_CLASSES[category?.slug as PRODUCT_STATUS];

  // console.log(category.slug, discountBadge, category, category.name);

  return (
    <div
      className={`absolute z-10 top-0 left-0 p-1 px-4 text-xs rounded-ss-lg rounded-ee-lg ${backgroundBasedOnStatus} text-white`}>
      {discountBadge}
    </div>
  );
};

export default ProductDiscount;
