import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import productImg10 from "assets/images/topselling/thumbnail-10.jpg";
import productImg11 from "assets/images/topselling/thumbnail-11.jpg";
import productImg12 from "assets/images/topselling/thumbnail-12.jpg";
export default function TopRate() {
  return (
    <div>
      <div>
        <TopSellingHead productTitle="Top Rated" />
      </div>
      <div>
        <TopSellingCard
          productImageTop={productImg10}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg11}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg12}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
}
