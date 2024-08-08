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
      <div className="p-3 group rounded-[1rem] border relative hover:border-primary-default transition duration-500">
        <div className="absolute z-10 top-0 left-0 font-bold bg-primary-default text-[#fff]  rounded-tl-[12px] rounded-br-[25px] py-[10px] px-5 text-[13px] leading-none">
          {trans("new")}
        </div>
        <div className="relative">
          <Link
            to={"/"}
            className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
            <img
              src={product.images[0]?.url + "?w=200&h=200"}
              alt={getLocalizedValue(product.name)}
              width={200}
              height={200}
              className="group-hover:scale-110 z-10 rounded-full transition ease-in duration-500"
            />
          </Link>
          <PreviewProducts />
        </div>

        <div className="mt-6 space-y-3 m-3">
          <span className="text-[#adadad] text-[12px] ">
            {getLocalizedValue(product.category.name)}
          </span>
          {/* Stars */}
          <div className="flex items-center gap-2">
            <Stars ratings={product.rating || 0} />
            <span className="text-[#B6B6B6] text-[14px] ">
              ({product.rating || 0})
            </span>
          </div>
          <Link
            to={"/"}
            className="font-bold text-base inline-block hover:text-primary-default transition duration-500">
            {getLocalizedValue(product.name)}
          </Link>
          <div className="flex items-center justify-between gap-4">
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
