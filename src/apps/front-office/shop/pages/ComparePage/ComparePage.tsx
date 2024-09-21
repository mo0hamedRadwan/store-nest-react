import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { cn } from "@utils";
import Rating from "src/apps/front-office/design-system/components/Rating";
import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";
import HorizonalTable from "src/apps/front-office/shop/components/HorizontalTable";
import URLS from "src/apps/front-office/utils/urls";
import compareProducts, { StackStatus } from "../mocks/compare-products";

export default function ComparePage() {
  return (
    <>
      <Helmet title={trans("compare-page.title")} />
      <main className="w-full text-secondary">
        <div className="breadcrump relative">
          <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
          <div className="nav-links w-full">
            <Breadcrumb
              navItems={[
                { name: trans("page") },
                { name: trans("compare-page.title"), url: URLS.compare },
              ]}
              attributes={{
                className: "justify-end items-end py-4 my-0",
              }}
            />
          </div>
        </div>

        <section className="my-10">
          {compareProducts.length <= 0 && (
            <h1 className="text-5xl text-primary font-bold text-center">
              {trans("compare-page.noProducts")}
            </h1>
          )}

          {compareProducts.length > 0 && (
            <>
              <h1 className="text-4xl font-bold">
                {trans("compare-page.title")}
              </h1>

              <p className="text-muted-foreground font-bold">
                {trans("compare-page.subtitle", {
                  count: (
                    <span className="text-primary">
                      {compareProducts.length}
                    </span>
                  ),
                })}
              </p>

              <HorizonalTable
                columnsAside={[
                  { key: "image", title: trans("compare-page.image") },
                  { key: "name", title: trans("compare-page.name") },
                  { key: "price", title: trans("compare-page.price") },
                  { key: "rating", title: trans("compare-page.rating") },
                  {
                    key: "description",
                    title: trans("compare-page.description"),
                  },
                  {
                    key: "stackStatus",
                    title: trans("compare-page.stackStatus"),
                  },
                  { key: "weight", title: trans("compare-page.weight") },
                  {
                    key: "dimensions",
                    title: trans("compare-page.dimensions"),
                  },
                ]}
                data={compareProducts}
                render={{
                  image: value => <img src={value} />,

                  name: value => (
                    <span
                      className="text-2xl hover:text-orange-500 font-semibold cursor-pointer
                ">
                      {value}
                    </span>
                  ),

                  price: value => (
                    <p className="text-center text-primary text-4xl font-semibold">
                      ${value}
                    </p>
                  ),

                  rating: value => (
                    <div className="w-full flex items-center justify-center">
                      <Rating rate={value} className="inline-block w-6 h-6" />
                      <span className="ml-4">
                        ({value} {trans("rates")})
                      </span>
                    </div>
                  ),

                  description: value => (
                    <p className="text-lg text-muted-foreground">{value}</p>
                  ),

                  stackStatus: value => (
                    <p
                      className={cn({
                        "w-fit px-6 py-3 mx-auto text-xl": true,
                        "text-primary bg-green-100 font-bold":
                          value === StackStatus.InStock,
                        "text-rose-600 bg-rose-100 font-bold":
                          value === StackStatus.OutStock,
                      })}>
                      {value}
                    </p>
                  ),

                  weight: value => (
                    <p className="text-lg font-bold text-center">
                      {value} grams
                    </p>
                  ),

                  dimensions: value => (
                    <p className="text-lg font-bold text-center">{value}</p>
                  ),
                }}
              />
            </>
          )}
        </section>
      </main>
    </>
  );
}
