import { trans } from "@mongez/localization";
import { PRODUCT_STATUS, PRODUCT_STATUS_CLASSES } from "shared/constants";

type ProductDiscountProps = {
  discount?: number;
  status?: PRODUCT_STATUS;
};

const ProductDiscount = ({
  discount = 0,
  status = PRODUCT_STATUS.DEFAULT,
}: ProductDiscountProps) => {
  if (!discount) return null;

  const discountBadge = `Save ${discount}%`;

  const backgroundBasedOnStatus = PRODUCT_STATUS_CLASSES[status];

  status = trans(status);

  return (
    <div
      className={`absolute z-10 top-0 left-0 p-1 px-4 text-xs rounded-ss-lg rounded-ee-lg ${backgroundBasedOnStatus} text-white`}>
      {status !== "default" && status + " - "} {discountBadge}
    </div>
  );
};

export default ProductDiscount;
