"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../../../../shared/assets/images/slider/slider-1.png";
import slider2 from "../../../../../../shared/assets/images/slider/slider-2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
export type SliderProps = {
  // props go here
};
const sliderArray = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
];
export default function Slider(props: SliderProps) {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        className="rounded-3xl">
        {sliderArray.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-center justify-center py-6 rounded-3xl">
              <img
                src={slide.image}
                className="object-fit lg:bg-cover bg-center bg-no-repeat rounded-3xl w-full h-[200px]  lg:h-full lg:min-h-[350px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute !bottom-5 left-1/2  transform -translate-x-1/2 z-10"></div>
      </Swiper>
      <div className="swiper-button-prev absolute top-1/2 !left-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>
      <div className="swiper-button-next absolute top-1/2 !right-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>
    </div>
  );
}
