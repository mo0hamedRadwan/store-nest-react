import { trans } from "@mongez/localization";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";

export type ShopBannerProps = {
  // props go here
};
export default function ShopBanner() {
  return (
    <>
      <div className="rounded-lg mt-10 mb-14 py-[70px] px-[80px] bg-[url('https://nest-frontend-v6.netlify.app/assets/imgs/blog/header-bg.png')] bg-cover">
        <Breadcrumb
          title={trans("shop")}
          navItems={[{ name: trans("shop") }]}
        />
      </div>
    </>
  );
}
