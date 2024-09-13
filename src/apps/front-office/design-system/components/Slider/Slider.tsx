import { Banner } from "app/utils/types";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

type SliderPropsType = {
  banners: Banner[];
};

export default function Slider({ banners }: SliderPropsType) {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        virtualTranslate
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
        className="rounded-3xl">
        {banners.map(banner => (
          <SwiperSlide key={banner.id}>
            <div className="relative flex items-center justify-center py-6 rounded-3xl">
              <img
                src={banner.image.url}
                className="object-fit lg:bg-cover bg-center bg-no-repeat rounded-3xl w-full h-[200px]  lg:h-full lg:min-h-[350px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute !bottom-8 left-1/2  transform -translate-x-1/2 z-10"></div>
      </Swiper>
      <div className="swiper-button-prev absolute top-1/2 !left-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary"></div>
      <div className="swiper-button-next absolute top-1/2 !right-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary"></div>
    </div>
  );
}
