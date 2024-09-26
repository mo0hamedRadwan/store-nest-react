import { Category } from "app/shop/utils/types";

// ============================== STATUS ==============================
enum PRODUCT_STATUS {
  SALE = "top-selling",
  RATED = "top-rated",
  NEW = "recently-added",
}

const PRODUCT_STATUS_CLASSES = {
  [PRODUCT_STATUS.SALE]: "bg-red-500",
  [PRODUCT_STATUS.NEW]: "bg-blue-500",
  [PRODUCT_STATUS.RATED]: "bg-yellow-500",
};

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

  return (
    <div
      className={`absolute z-10 top-0 left-0 p-1 px-4 text-xs rounded-ss-lg rounded-ee-lg ${backgroundBasedOnStatus} text-white`}>
      {discountBadge}
    </div>
  );
};

export default ProductDiscount;
