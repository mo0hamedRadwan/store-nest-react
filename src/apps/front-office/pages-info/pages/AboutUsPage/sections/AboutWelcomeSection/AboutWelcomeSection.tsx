import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/apps/front-office/design-system/components/ui/carousel";
import {
  currentDirection,
  currentLocaleCode,
} from "src/apps/front-office/utils/helpers";
function _AboutWelcomeSection() {
  return (
    <div className="flex gap-4 max-lg:flex-col">
      <div className="body-t-1-left px-10 py-4 basis-full max-lg:order-2">
        <h2 className="text-4xl font-bold">Welcome to Nest</h2>

        <p className="text-muted-foreground text-justify my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum. Ius ferri velit sanctus cu,
          sed at soleat accusata. Dictas prompta et Ut placerat legendos
          interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis
          ante Etiam sit amet orci eget. Quis commodo odio aenean sed
          adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit
          sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>

        <div className="gallery-images w-full my-4">
          <Carousel>
            <CarouselContent
              lang={currentLocaleCode()}
              dir={currentDirection()}>
              {[
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-2.png",
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-4.png",
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-2.png",
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-4.png",
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-3.png",
                "https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-4.png",
              ].map(image => (
                <>
                  <CarouselItem className="w-full me-2 xs:basis-1/2 md:basis-1/3 aspect-square">
                    <img src={image} />
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-1/2 -translate-y-1/2 left-2 text-primary hover:text-primary-foreground" />
            <CarouselNext className="top-1/2 -translate-y-1/2 right-2 text-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
      <div className="body-t-1-right basis-full max-lg:order-1">
        <img
          src="https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-1.png"
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
}

const AboutWelcomeSection = React.memo(_AboutWelcomeSection);
export default AboutWelcomeSection;
