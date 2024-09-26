import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import { Product } from "src/apps/front-office/shop/utils/types";

type TopSellingPropsType = {
  moduleName: string;
  products: Product[];
};

export default function TopSelling({
  moduleName,
  products,
}: TopSellingPropsType) {
  return (
    <div>
      <div>
        <TopSellingHead productTitle={moduleName} />
      </div>
      <div>
        {products.map(el => {
          return (
            <div key={el.id}>
              <TopSellingCard
                productImageTop={el.images[0].url}
                productName={el.shortDescription}
                salePrice={el.salePrice}
                priceOld={el.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
