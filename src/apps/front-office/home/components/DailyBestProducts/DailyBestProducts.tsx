import Product from "apps/front-office/design-system/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";

import products from "app/mocks/daily-best-sells-products";

export default function DailyBestProducts() {
  return (
    <Carousel>
      <CarouselContent className="ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="w-full xs:basis-1/2 flex-wrap md:basis-1/3 xl:basis-1/4 me-2">
            <Product
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
