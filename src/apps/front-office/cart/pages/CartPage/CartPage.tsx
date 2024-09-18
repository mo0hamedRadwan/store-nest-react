import { trans } from "@mongez/localization";
import React from "react";
import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";

export type CartPageProps = {
  children: React.ReactNode;
};
function _CartPage(props: CartPageProps) {
  return (
    <>
      <Breadcrumb title={trans("cart")} navItems={[{ name: trans("cart") }]} />
      <h1>CartPage</h1>
      {props.children}
    </>
  );
}

const CartPage = React.memo(_CartPage);
export default CartPage;
