import Product from "apps/front-office/design-system/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

import products from "app/mocks/daily-best-sells-products";

export default function DailyBestProducts() {
  return (
    <Carousel
      plugins={[
        emblaCarouselAutoplay({
          delay: 1500,
        }),
      ]}>
      <CarouselContent className="ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 me-2">
            <Product
              key={index}
              image={product.image}
              body={product.content}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/3 left-2" />
      <CarouselNext className="top-1/3 right-2" />
    </Carousel>
  );
}
