import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import productImg7 from "assets/images/topselling/thumbnail-7.jpg";
import productImg8 from "assets/images/topselling/thumbnail-8.jpg";
import productImg9 from "assets/images/topselling/thumbnail-9.jpg";

export default function RecentlyAdd() {
  return (
    <div>
      <div>
        <TopSellingHead productTitle="Recently added" />
      </div>
      <div>
        <TopSellingCard
          productImageTop={productImg7}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg8}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <TopSellingCard
          productImageTop={productImg9}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
}
