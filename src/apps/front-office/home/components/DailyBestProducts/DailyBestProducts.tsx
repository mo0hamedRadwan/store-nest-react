import Product from "apps/front-office/design-system/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";

import {
  currentDirection,
  currentLocaleCode,
} from "apps/front-office/utils/helpers";
import { Product as ProductType } from "src/apps/front-office/utils/types";
import { showProductQuickView } from "../../atoms/product-quick-view";

type DailyBestSellsProps = {
  products: ProductType[];
};

export default function DailyBestProducts({ products }: DailyBestSellsProps) {
  return (
    <Carousel>
      <CarouselContent
        lang={currentLocaleCode()}
        dir={currentDirection()}
        className="ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="w-full me-2 xs:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Product
              key={index}
              product={product}
              className="w-full group/product"
              onClick={() => showProductQuickView(product)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/3 left-2" />
      <CarouselNext className="top-1/3 right-2" />
    </Carousel>
  );
}
