import { trans } from "@mongez/localization";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import { CartItem } from "src/apps/front-office/utils/types";

type CartTotalsProps = {
  cartItems: CartItem[];
};

export default function CartTotals({ cartItems }: CartTotalsProps) {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="cart-totals pt-4 pb-7 px-10 bg-white border border-[#ececec] max-xl:px-5 rounded-[15px] shadow-md">
      <h3 className="text-[18px] uppercase font-bold pb-3 border-b ">
        {trans("cartTotals")}
      </h3>
      <ul className="mb-5 max-sm:mb-1">
        <li className="flex justify-between items-center py-4 border-b">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-[#B6B6B6] font-semibold">
            {trans("subtotal")}
          </strong>
          <span className="text-[18px] font-bold text-right">
            {price(total)}
          </span>
        </li>
        <li className="flex justify-between py-4 border-b">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-[#B6B6B6] font-semibold max-xl:w-[30%] max-xl:text[14px]">
            {trans("shipping")}
          </strong>
          <span className="text-[15px] text-primary-text text-right max-xl:text-[14px] max-sm:text-[12px]">
            {trans("shippingCosts")}
          </span>
        </li>
        <li className="flex justify-between items-center py-7">
          <strong className="w-[35%] flex-custom capitalize text-[15px] text-[#B6B6B6] font-semibold">
            {trans("total")}
          </strong>
          <span className="text-[24px] font-bold text-right text-primary">
            {price(total)}
          </span>
        </li>
      </ul>
      <Button
        href={URLS.checkout.page}
        className="w-full h-[54px]"
        variant="default">
        {trans("proceedToCheckout")}
      </Button>
    </div>
  );
}
