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
import HeaderPage from "./components/HeaderPage";

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
            <HeaderPage title="What we provide" />

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

          <div className="body-t-3">
            {/* <HeaderPage title="Our Team" /> */}
            <div className="container grid grid-cols-1 lg:grid-cols-2">
              <div className="image-r">
                <img src="https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-5.png" />
              </div>
              <div className="info-l text-right">
                <h4 className="text-2xl capitalize text-gray-400 my-4">
                  our performance
                </h4>

                <h2 className="text-5xl font-bold my-4">
                  Your Partner for e-commerce grocery solution
                </h2>

                <p className="text-muted-foreground leading-7">
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  <p className="my-4">
                    Pitatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="body-t-4 my-4">
            <div className="container grid gap-x-7 grid-cols-1 lg:grid-cols-3">
              <div className="box-info my-4">
                <h5 className="capitalize text-3xl font-bold my-4">
                  Who we are
                </h5>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  aliquid, iure blanditiis voluptate repellendus temporibus
                  voluptates unde eum fuga, corporis, ea tenetur quibusdam
                </p>
              </div>
              <div className="box-info my-4">
                <h5 className="capitalize text-3xl font-bold my-4">
                  our history
                </h5>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  aliquid, iure blanditiis voluptate repellendus temporibus
                  voluptates unde eum fuga, corporis, ea tenetur quibusdam
                </p>
              </div>
              <div className="box-info my-4">
                <h5 className="capitalize text-3xl font-bold my-4">
                  our mission
                </h5>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  aliquid, iure blanditiis voluptate repellendus temporibus
                  voluptates unde eum fuga, corporis, ea tenetur quibusdam
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-10 body-t-5 bg-[url('https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-9.png')] bg-cover bg-center">
            <div className="overlay bg-[#4B675A] absolute inset-0 opacity-80"></div>
            <div className="relative text-white hidden md:grid md:grid-cols-2 lg:grid-cols-5 z-50">
              <div className="box-info my-8 text-center">
                <div className="rate text-7xl font-bold">+0</div>
                <p className="text-2xl font-semibold">Glorious years</p>
              </div>
              <div className="box-info my-8 text-center">
                <div className="rate text-7xl font-bold">+0</div>
                <p className="text-2xl font-semibold">Happy customers</p>
              </div>
              <div className="box-info my-8 text-center">
                <div className="rate text-7xl font-bold">+0</div>
                <p className="text-2xl font-semibold">Successful projects</p>
              </div>
              <div className="box-info my-8 text-center">
                <div className="rate text-7xl font-bold">+0</div>
                <p className="text-2xl font-semibold">Professional team</p>
              </div>
              <div className="box-info my-8 text-center hidden lg:block">
                <div className="rate text-7xl font-bold">+0</div>
                <p className="text-2xl font-semibold">Global presence</p>
              </div>
            </div>
          </div>

          <div className="body-t-6"></div>
          <div className="body-t-7"></div>
          <div className="body-t-8"></div>
        </main>
      </div>
    </section>
  );
}
