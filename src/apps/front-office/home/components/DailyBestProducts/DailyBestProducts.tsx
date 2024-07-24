import Product from "apps/front-office/design-system/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

export default function DailyBestProducts() {
  return (
    <Carousel
      plugins={[
        emblaCarouselAutoplay({
          delay: 1500,
        }),
      ]}>
      <CarouselContent className="ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 me-2">
            <Product key={index} discount={"Save 15%"} className="w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/3 left-2" />
      <CarouselNext className="top-1/3 right-2" />
    </Carousel>
  );
}
