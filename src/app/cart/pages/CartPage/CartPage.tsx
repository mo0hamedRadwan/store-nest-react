import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import EmptyComponent from "design-system/components/EmptyComponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "design-system/components/ui/breadcrumb";
import { ShoppingBag } from "lucide-react";
import React from "react";

import { NavItems } from "app/shop/pages/ProductDetailsPage/ProductPage";
import Error from "design-system/components/Error";
import Loader from "design-system/components/ui/Indicators/Indicators";
import { URLS } from "shared/utils";
import { cartAtom } from "../../atoms/cart-atom";
import { useCartLoader } from "../../hooks/use-cart";
import CartProductsTable from "./components/CartProductsTable";
import CartTotals from "./components/CartTotals";

const emptyCartInfo = {
  title: trans("emptyCart"),
  description: trans("cartEmptyDescription"),
  icon: <ShoppingBag size="150" />,
};
const navItems: NavItems = [
  {
    name: trans("shop"),
    url: URLS.shop.viewCategoryRoute,
  },
  { name: trans("cart"), url: URLS.cart },
];
function _CartPage() {
  const { isLoading, error } = useCartLoader();
  const cart = cartAtom.useValue();

  if (error) return <Error error={error} />;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title={trans("cart")} />
      <Breadcrumb className="border-b border-gray-200 py-5">
        <div className="container">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={URLS.home}>{trans("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {navItems?.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.url ? (
                    <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < navItems.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </div>
      </Breadcrumb>
      {cart.items?.length > 0 ? (
        <div className="cart-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
          <div className="container">
            <div className="flex justify-between flex-wrap">
              <div className="w-[calc(70%-40px)] max-xl:w-[calc(65%-30px)] max-lg:w-[100%]">
                <CartProductsTable cartItems={cart.items || []} />
              </div>
              <div className="w-[30%] max-xl:w-[35%] max-lg:w-[100%]">
                <CartTotals cartItems={cart.items || []} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyComponent {...emptyCartInfo} />
      )}
    </>
  );
}

const CartPage = React.memo(_CartPage);
export default CartPage;
