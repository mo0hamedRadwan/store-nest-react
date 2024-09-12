import Card from "src/apps/front-office/design-system/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/apps/front-office/design-system/components/ui/carousel";
import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";
import {
  currentDirection,
  currentLocaleCode,
} from "src/apps/front-office/utils/helpers";

import provide_mock from "../../mocks/we-provide.mock";

export default function AboutUsPage() {
  return (
    <section className="w-full">
      <div className="breadcrump relative">
        <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
        <div className="nav-links w-full">
          <Breadcrumb
            navItems={[
              { name: "Pages" },
              { name: "About Us", url: "/about-us" },
            ]}
            attributes={{
              className: "justify-end items-end py-4 my-0",
            }}
          />
        </div>
      </div>

      <div className="my-10">
        <main className="about-body">
          <div className="body-t-1 h-m px-10 py-4">
            <div className="flex gap-4 max-lg:flex-col">
              <div className="body-t-1-left px-10 py-4 basis-full max-lg:order-2">
                <h2 className="text-4xl font-bold">Welcome to Nest</h2>

                <p className="text-muted-foreground text-justify my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum. Ius
                  ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
                  et Ut placerat legendos interpre.Donec vitae sapien ut libero
                  venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
                  Quis commodo odio aenean sed adipiscing. Turpis massa
                  tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi
                  sit amet. Commodo consequat. Duis aute irure dolor in
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
                    <CarouselPrevious className="top-1/2 -translate-y-1/2 left-2 text-primary hover:text-secondary" />
                    <CarouselNext className="top-1/2 -translate-y-1/2 right-2 text-primary hover:text-secondary" />
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
          </div>

          <div className="body-t-2">
            <h2 className="text-4xl font-bold text-center capitalize my-4 bg-[url('https://nest-frontend-rtl-v6.vercel.app/assets/imgs/theme/wave.png')] bg-no-repeat bg-bottom pb-7">
              What we provide?
            </h2>

            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-7 py-10">
              {provide_mock.map((item, index) => (
                <div className="" key={index}>
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                </div>
              ))}
            </section>
          </div>
          <div className="body-t-3"></div>
          <div className="body-t-4"></div>
          <div className="body-t-5"></div>
          <div className="body-t-6"></div>
          <div className="body-t-7"></div>
          <div className="body-t-8"></div>
        </main>
      </div>
    </section>
  );
}
