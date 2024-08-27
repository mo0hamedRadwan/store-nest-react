import { trans } from "@mongez/localization";
import { ArrowRightFromLine } from "lucide-react";

export default function DailyBestBanner() {
  return (
    <div
      className="daily-best-banner__cover relative md:max-w-64 lg:max-w-72 w-full h-full bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: `url(/public/images/daily-best-products/banner-4.png)`,
      }}>
      <div className="daily-best-banner__content absolute top-0 left-0 p-12">
        <h3 className="banner-text text-4xl font-bold mb-32 text-black-soft-foreground">
          {trans("dailyBestSellsBannerText")}
        </h3>

        <button className="font-medium rounded-sm bg-primary hover:bg-[#FDC040] p-2 text-white text-sm flex items-center gap-2 group transition-all">
          {trans("shopNow")}{" "}
          <ArrowRightFromLine className="block w-4 h-4 group-hover:ms-2 transition-all" />
        </button>
      </div>
    </div>
  );
}
