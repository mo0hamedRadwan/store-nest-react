import { cn } from "@utils";
import { ArrowRightFromLine } from "lucide-react";

export type DailyBestBannerProps = {
  // props go here
};

export default function DailyBestBanner(props: DailyBestBannerProps) {
  return (
    <div
      className="daily-best-banner__cover relative md:max-w-64 lg:max-w-72 w-full h-full bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: `url(/public/images/daily-best-products/banner-4.png)`,
      }}>
      <div className="daily-best-banner__content absolute top-0 left-0 p-12">
        <div className="banner-text text-4xl font-bold mb-32 text-[#253D4E]">
          Bring nature into your home
        </div>

        <div className="banner-btn">
          <button
            className={cn([
              "font-medium rounded-sm bg-primary-soft hover:bg-[#FDC040] p-2 text-white text-sm flex items-center gap-2 group transition-all",
            ])}>
            Shop Now{" "}
            <ArrowRightFromLine
              className={cn([
                "block w-4 h-4",
                "group-hover:ms-2 transition-all",
              ])}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
