import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Product } from "apps/front-office/utils/types";
import { ShoppingCart } from "lucide-react";
import PreviewProducts from "../PreviewProducts";

export type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.salePrice ? true : false;
  const currentLang = getCurrentLocaleCode();

  const getLocalizedValue = (
    localizedValues: { localeCode: string; value: string }[],
  ) => {
    const localizedValue = localizedValues.find(
      item => item.localeCode === currentLang,
    );
    return localizedValue ? localizedValue.value : localizedValues[0].value;
  };

  return (
    <>
      <div className=" group rounded-[15px] border border-[#ececec] relative overflow-hidden hover:border-primary-light hover:shadow-md transition duration-500">
        <div>
          {isOnSale ? (
            <div className="absolute z-10 top-0 left-0 font-normal bg-[#67bcee] text-[#fff] rounded-tl-[12px] rounded-br-[25px]  px-[20px] pt-[9px] pb-[10px] text-[13px] leading-none">
              {trans("sale")}
            </div>
          ) : (
            <div className="absolute z-10 top-0 left-0 font-normal bg-primary-default text-[#fff] rounded-tl-[12px] rounded-br-[25px] px-[20px] pt-[9px] pb-[10px] text-[13px] leading-none">
              {trans("new")}
            </div>
          )}
        </div>
        <div className="relative p-[25px] pb-0">
          <div className="overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl max-h-[320px] ">
            <img
              src={product.images[0]?.url + "?w=200&h=200"}
              alt={getLocalizedValue(product.name)}
              className="max-w-80 max-h-[320px] group-hover:scale-110 z-10 rounded-full transition ease-in duration-500"
            />
          </div>
          <PreviewProducts />
        </div>
        <div className="px-[20px] pt-[20px] pb-[20px]">
          <span className="flex text-[#adadad] text-[12px] mb-[5px] hover:text-primary-default cursor-pointer">
            {getLocalizedValue(product.category.name)}
          </span>
          <h2>
            <Link
              to={"/"}
              className="font-bold text-base inline-block text-[#253D4E] hover:text-primary-default transition duration-500">
              {getLocalizedValue(product.name)}
            </Link>
          </h2>
          {/* Stars */}
          <div className="flex items-center gap-2 mt-1">
            <Stars ratings={product.rating || 0} />
            <span className="text-[#B6B6B6] text-[14px] ">
              ({product.rating || 0})
            </span>
          </div>

          <div className="mt-[15px] flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-2">
              {isOnSale && (
                <span className="inline-block self-start text-primary-default font-bold text-lg">
                  ${product.salePrice}
                </span>
              )}
              <span
                className={`font-bold ${
                  isOnSale
                    ? "text-[#adadad] line-through text-sm"
                    : "text-primary-default text-xl"
                }`}>
                ${product.price}
              </span>
            </div>
            <Button size={"sm"} variant={"cart"}>
              <ShoppingCart size={15}></ShoppingCart>
              {trans("addToCart")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
