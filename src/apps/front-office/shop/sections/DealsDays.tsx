import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { ShoppingCart } from "lucide-react";
import { forwardRef } from "react";
import Stars from "../../design-system/components/Stars";
import { Button } from "../../design-system/components/ui/button";
import { getLocalizedValue } from "../../utils/localization";
import { shopDataAtom } from "../atoms/shop-data.atom";

export type DealsDaysProps = {
  // props go here
};
function DealsDays(props: DealsDaysProps, ref: any) {
  const mockData = shopDataAtom.use("products").slice(0, 4);

  return (
    <div className="py-10" ref={ref}>
      <h2 className="text-4xl font-bold">Deals Of The Day</h2>
      <div className="flex w-full flex-wrap my-10">
        {mockData.map(product => {
          return (
            <div
              key={product.id}
              className="p-2 pb-7 relative w-full basis-full sm:basis-1/2 lg:basis-1/3">
              <img
                className="w-full"
                src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-6.png"
              />
              <div className="content-text max-w-[94%] mx-auto -mt-32 z-50">
                <div className="deals-countdown-wraphttps://nest-frontend-v6.netlify.app/shop-grid-right#">
                  <div
                    className="flex gap-1 justify-evenly"
                    data-countdown="2026/04/25 00:00:00">
                    <span className="bg-white flex flex-col p-1 rounded-sm border-gray-300 border text-center countdown-section">
                      <span className="countdown-amount hover-up text-primary">
                        625
                      </span>
                      <span className="countdown-period"> days </span>
                    </span>
                    <span className="bg-white flex flex-col p-1 rounded-sm border-gray-300 border text-center countdown-section">
                      <span className="countdown-amount hover-up text-primary">
                        10
                      </span>
                      <span className="countdown-period"> hours </span>
                    </span>
                    <span className="bg-white flex flex-col p-1 rounded-sm border-gray-300 border text-center countdown-section">
                      <span className="countdown-amount hover-up text-primary">
                        06
                      </span>
                      <span className="countdown-period"> mins </span>
                    </span>
                    <span className="bg-white flex flex-col p-1 rounded-sm border-gray-300 border text-center countdown-section">
                      <span className="countdown-amount hover-up text-primary">
                        39
                      </span>
                      <span className="countdown-period"> sec </span>
                    </span>
                  </div>
                </div>

                <div className="bg-white relative rounded-lg shadow-sm shadow-slate-300 p-4 mt-4">
                  <Link
                    to={"/"}
                    className="font-bold leading-4 text-sm inline-block transition duration-500">
                    {getLocalizedValue(
                      product.shortDescription,
                      "en",
                      "localeCode",
                      "value",
                    )}
                  </Link>

                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-2">
                      <Stars ratings={product.rating || 5} />
                      <span className="text-[#B6B6B6] text-[14px] ">
                        ({product.rating || 4.3})
                      </span>
                    </div>
                    <span className="text-[#adadad] text-[12px] ">
                      By{" "}
                      <span className="text-primary font-semibold">
                        {getLocalizedValue(
                          product.category?.name,
                          "en",
                          "localeCode",
                          "value",
                        )}
                      </span>
                    </span>

                    <div className="mt-2 flex gap-2 justify-between items-center">
                      <div className="flex gap-2">
                        {product.price && (
                          <span className="text-primary font-bold text-md ">
                            ${product.price}
                          </span>
                        )}
                        {product.salePrice && (
                          <span className="text-muted-foreground text-sm line-through">
                            ${product.salePrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <Button size={"sm"} variant={"cart"}>
                          <ShoppingCart size={15}></ShoppingCart>
                          {trans("addToCart")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default forwardRef(DealsDays);
