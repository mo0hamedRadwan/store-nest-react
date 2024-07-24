import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Product from "apps/front-office/design-system/components/Product";
import Autoplay from "embla-carousel-autoplay";
import BestSellsFilter from "../../components/BestSellsFilter";
import DailyBestBanner from "../../components/DailyBestBanner";
import "./HomePage.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "shared/components/ui/carousel";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <section className="best-daily-products">
          <div className="best-daily-products__header flex flex-col md:flex-row justify-between">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#253D4E]">
              Daily Best Sells
            </h2>
            <BestSellsFilter />
          </div>

          <div className="best-daily-products__body lg:flex">
            <div className="best-daily-products__banner hidden lg:block basis-3/12 rounded-3xl">
              <DailyBestBanner />
            </div>

            {/* Products */}
            <div className="best-daily-products__products lg:basis-9/12 transition-all">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 1000,
                    stopOnMouseEnter: true,
                  }),
                ]}>
                <CarouselContent className="ml-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 me-2">
                      <Product
                        key={index}
                        discount={"Save 15%"}
                        className="w-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="top-1/3 left-2" />
                <CarouselNext className="top-1/3 right-2" />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
