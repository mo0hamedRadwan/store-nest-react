import { trans } from "@mongez/localization";
import { Product } from "../../../utils/types";
import ProductActionsBtns from "./components/ProductActionsBtns";
import ProductOptions from "./components/ProductOptions/ProductOptions";
import ProductQuantity from "./components/ProductQuantity";

export type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="product-details mb-4 w-full sm:w-1/2 md:pt-3 lg:pt-6">
      <h2 className="product-name text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-700 capitalize mb-4">
        {product?.name}
      </h2>
      <div className="product-rating mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} className="bx bxs-star text-orange-300"></i>
        ))}
      </div>
      <div className="product-price flex items-center gap-1 mb-3">
        <span className="text-4xl md:text-5xl text-primary font-bold">
          {product?.hasDiscount ? product?.salePrice : product?.price}$
        </span>
        {product?.hasDiscount && (
          <span className="flex flex-col">
            <span className="text-[11px] md:text-sm text-orange-300 font-semibold leading-none">
              {product?.discount?.percentage}% Off
            </span>
            <span className="text-xl md:text-3xl text-priceOldColor font-bold leading-none">
              {product?.price}$
            </span>
          </span>
        )}
      </div>
      {product?.shortDescription && (
        <p className="text-sm text-gray-500 font-semibold lg:leading-7 mb-4">
          {product?.shortDescription}
        </p>
      )}
      <ProductOptions />
      <div className="product-actions flex gap-1 md:gap-2 mb-4">
        <ProductQuantity />
        <ProductActionsBtns />
      </div>
      <ul className="product-info grid grid-cols-2 gap-y-2 text-xs capitalize text-primary font-semibold">
        <li>
          <label className="text-gray-500">{trans("type")} : </label>
          {product?.type}
        </li>
        <li>
          <label className="text-gray-500">{trans("category")} : </label>
          {product?.category?.name}
        </li>
      </ul>
    </div>
  );
}
