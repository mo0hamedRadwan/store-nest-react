import { trans } from "@mongez/localization";
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

  function addProductToCart(id: number, arg1: number) {
    // this function is not implemented yet, waiting for atom to be implemented
    const product = { id, quantity: arg1 };
    console.log(product);
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className=" group rounded-[15px] border border-[#ececec] relative overflow-hidden hover:border-light hover:shadow-md transition duration-500 max-h-[465px] max-w-[298px]">
        <div>
          {isOnSale ? (
            <div className="absolute z-10 top-0 left-0 font-normal bg-[#67bcee] text-[#fff] rounded-tl-[12px] rounded-br-[25px]  px-[20px] pt-[9px] pb-[10px] text-[13px] leading-none">
              {trans("sale")}
            </div>
          ) : (
            <div className="absolute z-10 top-0 left-0 font-normal bg-primary text-[#fff] rounded-tl-[12px] rounded-br-[25px] px-[20px] pt-[9px] pb-[10px] text-[13px] leading-none">
              {trans("new")}
            </div>
          )}
        </div>
        <div className="relative p-[25px] pb-0">
          <div className="overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl ">
            <img
              src={product.images[0]?.url + "?w=200&h=200"}
              alt={product.name}
              className="max-w-60 max-h-60 group-hover:scale-110 z-10 rounded-full transition ease-in duration-500"
            />
          </div>
          <PreviewProducts product={product} />
        </div>
        <div className="px-[20px] pt-[20px] pb-[20px]">
          <span className="flex text-[#adadad] text-[12px] mb-[5px] hover:text-primary cursor-pointer">
            {product.category.name}
          </span>
          <h2>
            <Link
              to={"/"}
              className="font-bold text-base inline-block text-[#253D4E] hover:text-primary transition duration-500">
              {product.name}
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
                <span className="inline-block self-start text-primary font-bold text-lg">
                  ${product.salePrice}
                </span>
              )}
              <span
                className={`font-bold ${
                  isOnSale
                    ? "text-[#adadad] line-through text-sm"
                    : "text-primary text-xl"
                }`}>
                ${product.price}
              </span>
            </div>
            <Button
              size={"sm"}
              variant={"cart"}
              onClick={() => addProductToCart(product.id, 1)}>
              <ShoppingCart size={15}></ShoppingCart>
              {trans("addToCart")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
