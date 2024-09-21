import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/cart/atoms/cart-atom";
import { AiOutlineClose } from "react-icons/ai";
import CartCouponCode from "../CartCouponCode";
import CartProductsTableItem from "../CartProductsTableItem";

export default function CartProductsTable() {
  const items = cartAtom.use("items");

  return (
    <div className="cart-products-table max-lg:mb-8 max-sm:mb-5">
      <table className="table-auto w-full bg-white ltr:text-left rtl:text-right text-[15px] font-bold capitalize max-md:text-[12px] border border-[#ececec]">
        <thead className="">
          <tr className="!bg-[#ececec] text-[#253D4E] border-b uppercase text-[17px] text-center">
            <th className="product-thumbnail px-3 p-5 text-[0px]">
              {trans("productThumbnail")}
            </th>
            <th scope="col" className="product-name px-3 p-5 ">
              {trans("product")}
            </th>
            <th scope="col" className="product-price px-3 p-5">
              {trans("unitPrice")}
            </th>
            <th scope="col" className="product-quantity px-3 p-5">
              {trans("quantity")}
            </th>
            <th scope="col" className="product-subtotal px-3 p-5">
              {trans("subtotal")}
            </th>
            <th className="product-remove px-3 pb-5">
              <AiOutlineClose size="0" />
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <CartProductsTableItem key={item.id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr className="actions">
            <td
              colSpan={6}
              className="pt-8 pb-0 max-sm:flex max-sm:flex-col-reverse max-sm:pt-5">
              <CartCouponCode />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
