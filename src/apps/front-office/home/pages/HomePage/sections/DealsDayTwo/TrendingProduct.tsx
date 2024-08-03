import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import productImg4 from "assets/images/topselling/thumbnail-4.jpg";
import productImg5 from "assets/images/topselling/thumbnail-5.jpg";
import productImg6 from "assets/images/topselling/thumbnail-6.jpg";
export default function TrendingProduct() {
  return (
    <div>
      <div>
        <TopSellingHead productTitle="Trending Products" />
      </div>
      <div>
        <TopSellingCard
          productImageTop={productImg4}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg5}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg6}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
}
