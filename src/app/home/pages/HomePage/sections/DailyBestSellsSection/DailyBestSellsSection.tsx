import { trans } from "@mongez/localization";

import SectionHeader from "design-system/components/SectionHeader";
import DailyBestBanner from "app/home/components/DailyBestBanner";
import DailyBestFilter from "app/home/components/DailyBestFilter";
import DailyBestProducts from "app/home/components/DailyBestProducts";
import Loader from "design-system/Indicators/Loader";
import useFetchDailyBannerData from "app/home/hooks/use-fetch-daily-data";

export default function DailyBestSellsSection() {
  const { data, loading } = useFetchDailyBannerData();
  console.log("DATA", data);

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
        <div className="best-daily-products__banner hidden lg:block min-w-[250px] md:w-1/6 rounded-3xl">
          <DailyBestBanner />
        </div>

        <div className="best-daily-products__products lg:w-5/6 transition-all">
          {loading ? (
            <Loader />
          ) : (
            <DailyBestProducts products={data.slice(0, 7)} />
          )}
        </div>
      </div>
    </section>
  );
}
