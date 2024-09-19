import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "apps/front-office/design-system/components/ui/breadcrumb";
import URLS from "src/apps/front-office/utils/urls";
import WishlistItem from "../../components/WishlistItem";

export default function WishlistPage() {
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
            {/* {navItems?.map((item, index) => (
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
            ))} */}
          </BreadcrumbList>
        </div>
      </Breadcrumb>
      <main className="mt-[50px] mb-[30px] px-3">
        <div className="mb-[50px]">
          <h1 className="mb-[10px] text-5xl font-custom font-bold text-specialColor-secondary leading-[1.2]">
            {trans("wishlist")}
          </h1>
          <h6 className="text-specialColor-primary text-[16px] font-custom font-bold leading-[1.2]">
            {trans("wishlistContentOne")}
            <span className="text-priceNowColor px-1">5</span>
            {trans("wishlistContentTwo")}
          </h6>
        </div>
        <div>
          <WishlistItem />
        </div>
      </main>
    </>
  );
}
