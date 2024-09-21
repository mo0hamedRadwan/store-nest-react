import { trans } from "@mongez/localization";
import { Form } from "react-hook-form";
import { Button } from "src/apps/front-office/design-system/components/ui/button";

export default function CartCouponCode() {
  return (
    <Form className="coupon flex float-left max-sm:flex max-sm:flex-col max-sm:p-8 max-sm:border-2 max-sm:border-dashed max-sm:border-[#e5e5e5]">
      <span className="sm:text-md lg:text-2xl text-[#253D4E] font-bold mb-3 max-sm:mb-5">
        {trans("applyCoupon")}
      </span>
      <input
        type="text"
        placeholder={trans("couponCode")}
        className="min-w-[120px] h-[54px] p-3 mr-2 text-[15px] font-normal border border-[#e5e5e5] rounded-md placeholder-[#cbcbcb] max-sm:mb-3 max-sm:mr-0"
      />
      <Button
        type="submit"
        variant="default"
        className="h-[54px] uppercase px-11 font-semibold max-xl:px-5">
        {trans("applyCoupon")}
      </Button>
    </Form>
  );
}
