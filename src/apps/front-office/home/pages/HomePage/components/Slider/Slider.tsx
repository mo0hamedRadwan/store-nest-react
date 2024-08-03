import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import slider1 from "shared/assets/images/slider/slider-1.png";
import slider2 from "shared/assets/images/slider/slider-2.png";
const sliderArray = [
  {
    id: 1,
    image: slider1,
  },
  {
    id: 2,
    image: slider2,
  },
];
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);
  const scrollToIndex = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  return (
    <div className="relative overflow-hidden group">
      <div
        className="w-[calc(w-full - 40px)] h-[300px] md:h-[450px] xl:h-[700px] m-6 rounded-3xl"
        ref={emblaRef}>
        <div className="flex w-full h-full rounded-3xl">
          {sliderArray.map(slider => (
            <div
              key={slider.id}
              className="w-full flex-shrink-0 relative rounded-3xl text-slate-900 m-2">
              <img
                src={slider.image}
                className="absolute w-full h-full top-0 left-0 rounded-3xl"
                alt={`Slide ${slider.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-full hidden group-hover:flex items-center justify-between">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="bg-gray-200 bg-opacity-40 relative flex items-center justify-center left-10 h-12 w-12 rounded-full text-black hover:bg-primary-default transition-colors duration-300">
          <ChevronLeftIcon width={70} height={70} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="relative flex items-center justify-center right-10 h-12 w-12 rounded-full text-black hover:bg-primary-default transition-colors duration-200">
          <ChevronRightIcon width={70} height={70} />
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderArray.map((_, index) => (
          <button
            key={index}
            className={`${index === currentIndex ? "bg-primary-default" : "bg-white"} w-4 h-4 rounded-full opacity-50 hover:bg-primary-default border-black border transition-opacity duration-200 cursor-pointer`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
