import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { cn } from "@utils";
import HorizonalTable from "src/apps/front-office/design-system/components/HorizonalTable";
import Rating from "src/apps/front-office/design-system/components/Rating";
import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "src/apps/front-office/utils/urls";
import compareProducts, { StackStatus } from "../mocks/compare-products";

export default function ComparePage() {
  return (
    <>
      <Helmet title={trans("compare.title")} />
      <main className="w-full text-secondary">
        <div className="breadcrump relative">
          <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
          <div className="nav-links w-full">
            <Breadcrumb
              navItems={[
                { name: "Pages" },
                { name: "Compare Products", url: URLS.compare },
              ]}
              attributes={{
                className: "justify-end items-end py-4 my-0",
              }}
            />
          </div>
        </div>

        <section className="my-10">
          <h2 className="text-4xl font-bold my-4">Compare Products</h2>
          <p className="text-muted-foreground font-bold">
            There are <span className="text-primary">3</span> products to
            compare
          </p>

          <HorizonalTable
            columnsAside={[
              { key: "image", title: "Preview" },
              { key: "name", title: "Name" },
              { key: "price", title: "Price" },
              { key: "rating", title: "Rating" },
              { key: "description", title: "Description" },
              { key: "stackStatus", title: "Stack Status" },
              { key: "weight", title: "Weight" },
              { key: "dimensions", title: "Dimensions" },
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
                  <span className="ml-4">({value} Rates)</span>
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
                <p className="text-lg font-bold text-center">{value} grams</p>
              ),

              dimensions: value => (
                <p className="text-lg font-bold text-center">{value}</p>
              ),
            }}
          />
        </section>
      </main>
    </>
  );
}
