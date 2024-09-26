import ProductCard from "app/shop/components/ProductCard";
import { Product } from "app/shop/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "design-system/components/ui/carousel";

type DailyBestSellsProps = {
  products: Product[];
};

export default function DailyBestProducts({ products }: DailyBestSellsProps) {
  return (
    <Carousel>
      <CarouselContent className="ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="w-full me-2 xs:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <ProductCard
              key={index}
              product={product}
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
