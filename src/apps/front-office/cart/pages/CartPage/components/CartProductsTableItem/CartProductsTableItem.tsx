import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { ChevronDown, ChevronUp, DeleteIcon } from "lucide-react";
import { price } from "src/apps/front-office/utils/price";
import { CartItem } from "src/apps/front-office/utils/types";

export type CartProductsTableItemProps = {
  item: CartItem;
};
export default function CartProductsTableItem({
  item,
}: CartProductsTableItemProps) {
  function removeItemFromCart(id: any): void {
    // remove item from cart waiting for api
    console.log(id);
  }

  return (
    <tr className="border-b max-sm:block max-sm:pl-[100px] max-sm:relative">
      <td className="product-remove w-[5%] px-3 py-5 pl-0 max-sm:absolute max-sm:w-auto max-sm:right-1 max-sm:top-6 max-sm:p-0 rtl:left-24 rtl:right-[unset]">
        <button
          onClick={() => removeItemFromCart(item.id)}
          className="self-center border-gray-400 rounded-full border w-4 h-4 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500"
          title={trans("removeFromCart")}>
          <DeleteIcon />
        </button>
      </td>
      <td className="product-thumbnail w-[17%] py-3 px-6 h-[140px] max-sm:absolute max-sm:w-auto max-sm:left-1 max-sm:top-6 max-sm:p-0">
        <Link to={URLS.shop.viewProduct(item.Product)}>
          <img
            className="max-w-[90px]"
            src={item?.Product?.images[0]?.url}
            alt={item?.Product?.name}
          />
        </Link>
      </td>
      <td className="product-name w-[30%] px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
        <Link
          to={URLS.shop.viewProduct(item.Product)}
          className="text-[#253D4E] hover:text-[#fd7e14] duration-700 transition-all ease-in-out">
          {item?.Product?.name}
        </Link>
      </td>
      <td className="product-price w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("price")}
        </label>
        <span className="text-[#7E7E7E] text-2xl font-bold">
          {price(item.price)}
        </span>
      </td>
      <td className="product-quantity w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("quantity")}
        </label>
        <div className="quantity">
          <div className="border-2 border-primary rounded-md py-2 px-4 flex items-center gap-2">
            <span className="text-primary text-[16px] font-bold">
              {item.quantity}
            </span>
            <span className="text-primary text-[16px]">
              <ChevronUp size={18} />
              <ChevronDown size={18} />
            </span>
          </div>
        </div>
      </td>
      <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("subtotal")}
        </label>
        <span className="text-primary text-2xl font-bold">
          {price(Number(item.total.subtotal))}
        </span>
      </td>
    </tr>
  );
}
