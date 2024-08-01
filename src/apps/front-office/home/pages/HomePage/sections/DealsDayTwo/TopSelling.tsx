import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import productImg1 from "assets/images/topselling/thumbnail-1.jpg";
import productImg2 from "assets/images/topselling/thumbnail-2.jpg";
import productImg3 from "assets/images/topselling/thumbnail-3.jpg";

export default function TopSelling() {
  return (
    <div>
      <div>
        <TopSellingHead productTitle="Top Selling" />
      </div>
      <div>
        <TopSellingCard
          productImageTop={productImg1}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg2}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg3}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
}
