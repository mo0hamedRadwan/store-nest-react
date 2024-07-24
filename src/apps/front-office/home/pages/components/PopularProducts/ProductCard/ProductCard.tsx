import { Link } from "@mongez/react-router";
import { Product } from "apps/front-office/utils/types";
export type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.salePrice ? true : false;
  return (
    <>
      <div className="p-3 group rounded-[2rem] border relative">
        <div className="absolute z-10 top-0 left-0 font-bold bg-[#3BB77E] text-[#fff] rounded-tl-lg rounded-br-lg py-2 px-5 text-[13px] leading-none">
          New
        </div>
        <Link
          to={"/"}
          className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
          <img
            src={product.image.url + "?w=200&h=200"}
            alt={product.name}
            width={200}
            height={200}
            className="group-hover:scale-110 z-10 rounded-full transition ease-in duration-500"
          />
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-main rounded-3xl group-hover:bg-opacity-100 group-hover:h-full transition-all duration-300 bg-opacity-10">
            22
          </span>
        </Link>
        <div className="mt-6 space-y-2 m-3">
          {/* Starts */}
          <span className="text-[#adadad] text-[12px] ">
            {product.category.name}
          </span>
          <Link
            to={"/"}
            className="font-bold text-base inline-block group-hover:text-[#3BB77E] transition-all duration-500">
            {product.name}
          </Link>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block self-start text-[#3BB77E] font-bold text-lg">
                ${product.price}
              </span>
              <span
                className={`font-bold ${
                  isOnSale
                    ? "text-[#adadad]  line-through text-sm"
                    : "text-[#3BB77E] text-xl"
                }`}>
                ${product.salePrice}
              </span>
            </div>
            <button
              title="Add"
              className="bg-primary-main p-2 rounded-2xl hover:bg-primary-hover transition-colors">
              {/* <TbShoppingBag color="#000"></TbShoppingBag> */}
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
