import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "apps/front-office/design-system/components/ui/breadcrumb";
import { HeartPulseIcon } from "lucide-react";
import React from "react";
import EmptyComponent from "src/apps/front-office/design-system/components/EmptyComponent";
import Error from "src/apps/front-office/design-system/components/Error";
import Loader from "src/apps/front-office/design-system/components/ui/Indicators/Indicators";
import { NavItems } from "src/apps/front-office/shop/pages/ProductDetailsPage/ProductPage";
import URLS from "src/apps/front-office/utils/urls";
import { wishListAtom } from "../../atoms/wishlist-atom";
import WishlistItem from "../../components/WishlistTable";
import { useWishlist } from "../../hooks/use-wishlist";

const emptyWishListInfo = {
  title: trans("emptyWishlist"),
  description: trans("wishlistEmptyDescription"),
  icon: <HeartPulseIcon size="150" />,
};
function _WishlistPage() {
  const { error, products, isLoading, setProducts } = useWishlist();

  // Remove Meal From Wishlist
  const removeMealHandler = (productId: number | string) => {
    const updatedWishlist = products.filter(
      product => product.id !== productId,
    );
    setProducts(updatedWishlist);
  };

  if (isLoading) return <Loader />;

  if (error) return <Error error={error} />;

  const navItems: NavItems = [
    {
      name: trans("shop"),
      url: URLS.shop.viewCategoryRoute,
    },
    { name: trans("wishlist"), url: URLS.wishlist },
  ];

  return (
    <>
      <Helmet title="Browse your wishlist to view the products you wish to purchase." />
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
      {products.length > 0 ? (
        <main className="mt-[50px] mb-[30px] px-3 ">
          <div className="mb-[50px]">
            <h1 className="mb-[10px] text-5xl font-custom font-bold text-specialColor-secondary leading-[1.2]">
              {trans("wishlist")}
            </h1>
            <h6 className="text-specialColor-primary text-[16px] font-custom font-bold leading-[1.2]">
              {trans("wishlistContentOne")}
              <span className="text-priceNowColor px-1">
                {wishListAtom.value}
              </span>
              {trans("wishlistContentTwo")}
            </h6>
          </div>
          <div>
            <WishlistItem
              products={products}
              removeProduct={removeMealHandler}
            />
          </div>
        </main>
      ) : (
        <EmptyComponent {...emptyWishListInfo} />
      )}
    </>
  );
}
const WishlistPage = React.memo(_WishlistPage);
export default WishlistPage;
