import { Card, CardContent } from "apps/front-office/design-system/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel"
import FeaturedCategoriesBanner from "apps/front-office/home/components/FeaturedCategorieBanner";
import Autoplay from "embla-carousel-autoplay"
import React from "react";



export default function FeaturedCategories() {


    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const backgroundColors = ["#ECFFEC", "#FEEFEA", "#FFF3EB", "#FFF3FF"];

    const cards = [
        {
            backgroundImage: 'public/images/featured-categories/banner-1.png',
            title: 'Everyday Fresh & Clean with Our Products',
        },
        {
            backgroundImage: 'public/images/featured-categories/banner-2.png',
            title: 'Make your Breakfast Healthy and Easy',
        },
        {
            backgroundImage: 'public/images/featured-categories/banner-3.png',
            title: 'The best Organic Products Online',
        },
    ];


    return (
        <section className="featured-categories px-3 py-[25px]">

            <div className="featured-categories-title relative mb-11 ">
                <h3 className="sm:text-2xl lg:text-4xl font-bold text-[#253D4E]">Featured Categories</h3>
                {/* <div className="flex relative max-w-[200px] justify-end top-[unset] z-[2] w-full">
                <span className="relative w-10 h-10 leading-[44px] text-2xl cursor-pointer block z-[100] transition-all duration-[0.2s] ease-[ease-out] text-center text-[#7E7E7E] rounded-[50%] inset-x-[unset] bg-[#f2f3f4] mr-2.5 " >L </span>
                <span className="relative w-10 h-10 leading-[44px] text-2xl cursor-pointer block z-[100] transition-all duration-[0.2s] ease-[ease-out] text-center text-[#7E7E7E] rounded-[50%] inset-x-[unset] bg-[#f2f3f4]" >R</span>

              </div> */}
            </div>
            <div className="featured-categories-body flex justify-center mb-10">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="w-full overflow">
                        {Array.from({ length: 15 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/4 sm:basis-1/4 md:basis-1/5 lg:basis-1/11  me-2"
                            >
                                <div className="p-1">
                                    <Card style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                                        <CardContent className="flex flex-col aspect-[1_/_1.5] items-center justify-center p-6">
                                            <figure >
                                                <a>
                                                    <img
                                                        src="public/images/featured-categories/kiwi.png" alt="img-product" />
                                                </a>
                                            </figure>
                                            <p><a className=" text-slate-800 font-bold leading-relaxed md:text-lg">Oganic Kiwi</a></p>
                                            <span className="text-slate-400 text-base font-normal my-1">28 items</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex relative justify-end top-[-120.333333%] z-[2] w-full">
                        <CarouselPrevious className="w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5  left-[94%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
                        <CarouselNext className="w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 ml-2 left-[97%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
                    </div>
                </Carousel>
            </div>

            <div className="featured-categories-banners flex justify-center">
                {cards.map((card, index) => (
                    <FeaturedCategoriesBanner
                        key={index}
                        backgroundImage={card.backgroundImage}
                    />
                ))}
            </div>

        </section >
    )
}