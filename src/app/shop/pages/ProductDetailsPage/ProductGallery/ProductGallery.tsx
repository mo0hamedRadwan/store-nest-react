import { productAtom } from "app/shop/atoms/product.atom";
import { useState } from "react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductLightBox from "../ProductLightBox";

export default function ProductGallery() {
  const images = productAtom.get("images");
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="w-full sm:w-1/2 overflow-hidden">
        <div className="relative">
          <Swiper
            modules={[FreeMode, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="h-96 max-h-96 lg:h-[500px] lg:max-h-[500px] border border-gray-200 rounded-xl mb-4">
            {images.map((img, index) => {
              return (
                <SwiperSlide
                  key={"img" + index}
                  className="flex max-h-[inherit] items-center justify-center">
                  <img
                    src={img?.url}
                    alt={img?.name}
                    className="w-full h-full max-h-[inherit] object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Thumbs, Autoplay]}
            spaceBetween={15}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            className="h-20 sm:h-16 md:h-20 lg:h-24">
            {images.map((thumb, index) => {
              return (
                <SwiperSlide
                  key={"thumb" + index}
                  className="outline outline-1 -outline-offset-2 outline-gray-200 bg-white rounded-xl overflow-hidden">
                  <img
                    src={thumb?.url}
                    alt={thumb?.name}
                    className="h-full m-auto object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute left-4 top-4 z-50">
            <ProductLightBox images={images} />
          </div>
        </div>
      </div>
    </>
  );
}
