import { trans } from "@mongez/localization";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel";
import CategoryCard from "apps/front-office/home/components/CategoryCard";
import FeaturedCategoriesBanner from "apps/front-office/home/components/FeaturedCategoriesBanner";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function FeaturedCategories() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const data = [
    {
      id: 1,
      name: "Organic Kiwi",
      items: 28,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 2,
      name: "Organic Kiwi",
      items: 15,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 3,
      name: "Organic Kiwi",
      items: 30,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 4,
      name: "Organic Kiwi",
      items: 28,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 5,
      name: "Organic Kiwi",
      items: 15,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 6,
      name: "Organic Kiwi",
      items: 30,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 7,
      name: "Organic Kiwi",
      items: 28,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 8,
      name: "Organic Kiwi",
      items: 15,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 9,
      name: "Organic Kiwi",
      items: 30,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 10,
      name: "Organic Kiwi",
      items: 28,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 11,
      name: "Organic Kiwi",
      items: 15,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 12,
      name: "Organic Kiwi",
      items: 30,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 13,
      name: "Organic Kiwi",
      items: 28,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 14,
      name: "Organic Kiwi",
      items: 15,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
    {
      id: 15,
      name: "Organic Kiwi",
      items: 30,
      imgSrc: "/images/featured-categories/kiwi.png",
    },
  ];

  return (
    <section className="featured-categories px-3 py-[25px]">
      <div className="featured-categories-title relative mb-11 ">
        <h3 className="sm:text-2xl lg:text-4xl font-bold text-[#253D4E]">
          {trans("Featured Categories")}
        </h3>
      </div>
      <div className="featured-categories-body flex justify-center mb-10">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}>
          <CarouselContent className="w-full overflow">
            {data.map((item, index) => (
              <CategoryCard index={index} item={item} key={index} />
            ))}
          </CarouselContent>
          <div className="flex relative justify-end top-[-120.333333%] z-[2] w-full">
            <CarouselPrevious className="w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5  left-[94%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
            <CarouselNext className="w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 ml-2 left-[97%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
          </div>
        </Carousel>
      </div>

      <FeaturedCategoriesBanner />
    </section>
  );
}
