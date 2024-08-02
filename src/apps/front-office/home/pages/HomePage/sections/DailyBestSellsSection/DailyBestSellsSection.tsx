import { trans } from "@mongez/localization";

import SectionHeader from "apps/front-office/design-system/components/SectionHeader";
import DailyBestBanner from "apps/front-office/home/components/DailyBestBanner";
import DailyBestFilter from "apps/front-office/home/components/DailyBestFilter";
import DailyBestProducts from "apps/front-office/home/components/DailyBestProducts";

export default function DailyBestSellsSection() {
  return (
    <section className="best-daily-products">
      <div className="best-daily-products__header flex flex-col md:flex-row justify-between">
        <SectionHeader
          sectionName="best-daily-products"
          headerText={trans("dailyBestSells")}
          asideComponent={<DailyBestFilter />}
        />
      </div>

      <div className="best-daily-products__body lg:flex">
        <div className="best-daily-products__banner hidden lg:block basis-3/12 rounded-3xl">
          <DailyBestBanner />
        </div>

        <div className="best-daily-products__products lg:basis-9/12 transition-all">
          <DailyBestProducts />
        </div>
      </div>
    </section>
  );
}
