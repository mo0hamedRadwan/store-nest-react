import Product from "apps/front-office/design-system/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";

import products from "app/mocks/daily-best-sells-products";
import {
  currentDirection,
  currentLocaleCode,
} from "apps/front-office/utils/helpers";
import { showProductQuickView } from "../../atoms/product-quick-view";

export default function DailyBestProducts() {
  return (
    <Carousel>
      <CarouselContent
        lang={currentLocaleCode()}
        dir={currentDirection()}
        className="ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="w-full flex-wrap me-2 lg:basis-1/4 md:basis-1/3 xs:basis-1/2">
            <Product
              onClick={() => showProductQuickView(product)}
              key={index}
              images={product.images}
              status={product.status}
              body={product.body}
              className="w-full group/product"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/3 left-2" />
      <CarouselNext className="top-1/3 right-2" />
    </Carousel>
  );
}
