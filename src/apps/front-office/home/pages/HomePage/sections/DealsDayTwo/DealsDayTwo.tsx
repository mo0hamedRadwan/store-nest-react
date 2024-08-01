import RecentlyAdd from "./RecentlyAdd";
import TopRate from "./TopRate";
import TopSelling from "./TopSelling";
import TrendingProduct from "./TrendingProduct";

export default function DealsDayTwo() {
  return (
    <section className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 h-[800px] small-to-medium:h-[3670px] md:h-[420px]   overflow-hidden ">
      <TopSelling />
      <TrendingProduct />
      <RecentlyAdd />
      <TopRate />
    </section>
  );
}
