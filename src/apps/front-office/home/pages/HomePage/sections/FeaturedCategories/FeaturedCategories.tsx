import { trans } from "@mongez/localization";
import CategoryCard from "apps/front-office/home/components/CategoryCard";
import FeaturedCategoriesBanner from "apps/front-office/home/components/FeaturedCategoriesBanner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

export default function FeaturedCategories() {
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
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={data.length > 10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={5}
          slidesPerView={Math.min(4, data.length)}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 6, // For screens >= 640px
            },
            768: {
              slidesPerView: 8, // For screens >= 768px
            },
            1024: {
              slidesPerView: 10, // For screens >= 1024px
            },
            1536: {
              slidesPerView: 15, // For screens >= 1536px
            },
          }}
          className="w-full">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev p-2 absolute !top-[11%] !important] !left-[83.75rem] z-10  bg-[#f2f3f4] transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default cursor-pointer"></div>
        <div className=" swiper-button-next p-2 absolute !top-[11%] !important] !right-7 z-10  bg-[#f2f3f4] transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default cursor-pointer"></div>
      </div>

      <FeaturedCategoriesBanner />
    </section>
  );
}
