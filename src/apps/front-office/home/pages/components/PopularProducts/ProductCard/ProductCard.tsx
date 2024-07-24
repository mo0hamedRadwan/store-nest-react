import { Link } from "@mongez/react-router";
import { Product } from "apps/front-office/utils/types";
export type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="p-3 group rounded-[2rem] border relative">
        <div className="absolute z-20 top-6 left-6 font-bold bg-gray-800 text-white rounded-xl px-2 text-[13px]">
          Sale
        </div>
        <Link
          to={"/"}
          className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
          <img
            src={product.image.url + "?w=200&h=200"}
            alt={product.name}
            width={200}
            height={200}
            className="group-hover:scale-125 z-10 rounded-full transition-transform duration-300"
          />
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-main rounded-3xl group-hover:bg-opacity-100 group-hover:h-full transition-all duration-300 bg-opacity-10"></span>
        </Link>
        <div className="mt-6 space-y-2 m-3">
          {/* Starts */}
          <span>{product.brand}</span>
          <Link to={"/"} className="font-bold text-lg inline-block">
            {product.name}
          </Link>
          <p title={product.name} className="line-clamp-2 font-light">
            {product.description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <span className={`inline-block self-end font-bold `}>
                {product.salePrice}
              </span>

              <span className="inline-block self-start text-primary-main font-bold text-xl">
                {product.price}
              </span>
            </div>

            <button
              title="Add"
              className="bg-primary-main p-2 rounded-2xl hover:bg-primary-hover transition-colors">
              {/* <TbShoppingBag color="#000"></TbShoppingBag> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
