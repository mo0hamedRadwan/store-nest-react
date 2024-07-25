import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import  slider1 from "../../../../shared/assets/images/slider/slider-1.png" 
import  slider2  from '../../../../shared/assets/images/slider/slider-2.png'
import sendIcon from '../../../../shared/assets/images/slider/sendIcon.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
let sliderArray = [
  {id:1, image:slider1, text1:"Don't miss amazing", text2:"grocery deals", text3:"Sign up for the daily newsletter"},
  {id:2, image:slider2, text1:"Fresh Vegetables", text2:"Big discount", text3:"Sign up for the daily newsletter"},
]

export default function Slider() {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
          navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="rounded-3xl"
      >
        {sliderArray.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex items-center justify-center p-6 rounded-3xl">
              <img src={slide.image} className="bg-cover bg-center bg-no-repeat object-cover rounded-3xl w-full h-full min-h-[350px]"/>
              <section className="absolute top-1/2 bottom-1/2 left-8 sm:left-20 flex flex-col justify-center gap-2 items-start">
                <p className="pt-[20px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[72px]">{slide.text1}</p>
                <p className="pt-[20px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[72px]">{slide.text2}</p>
                <p className="pt-[50px]  lg:text-[30px]">{slide.text3}</p>

                <div className="bg-white mt-[20px] h-12 bottom-32 text-[10px] sm:text-[16px] left-20 rounded-3xl flex gap-2 justify-between items-center">
                  <div className="transition-transform -rotate-45 p-3 flex items-center">
                   <img src={sendIcon} alt="" />
                  </div>
                  <input type="text" placeholder="Your email address" className="h-10 outline-none" />
                  <button className="bg-primary-default h-12 rounded-3xl p-4 flex items-center text-white">Subscribe</button>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="swiper-pagination absolute !bottom-5 left-1/2  transform -translate-x-1/2 z-10"></div>
      </Swiper>

      <div className="swiper-button-prev absolute top-1/2 !left-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>
      <div className="swiper-button-next absolute top-1/2 !right-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>

    </div>
  )
}