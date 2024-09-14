import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { ShoppingCart } from "lucide-react";
import { Product } from "src/apps/front-office/shop/utils/types";
import { getLocalizedValue } from "src/apps/front-office/utils/localization";
import ProgressBar from "../../Indicators/ProgressBar";
import Rating from "../Rating";

export default function ProductContent({
  name,
  rating,
  price,
  discount,
  type,
  stock,
  purchase,
}: Product) {
  const priceAfterDiscount = discount
    ? price - (price * discount.percentage) / 100
    : price;

  return (
    <section className="product-content">
      <div className="product-category">
        <Link
          href={"brand/:id"}
          className="text-slate-400 block text-xs font-normal my-1">
          {type}
        </Link>
      </div>

      <div className="product-name">
        <Link href={"product/:id"} className="font-bold">
          {getLocalizedValue(name)}
        </Link>
      </div>

      <div className="product-rate flex">
        <Rating rate={rating || 2} />
      </div>

      <div className="product-price flex gap-2 py-2">
        <span className="product-actual-price text-primary font-bold text-lg">
          ${priceAfterDiscount?.toFixed(2) || price.toFixed(2)}
        </span>

        {discount && (
          <span className="product-discount-price text-slate-500 font-medium line-through">
            ${price}
          </span>
        )}
      </div>

      <div className="product-sold py-2 space-y-2">
        <ProgressBar />

        <div className="product-sold-text text-sm">
          {trans("sold")}: {purchase?.minQuantity}/{stock?.available}
        </div>
      </div>

      <div className="product-add-to-cart-btn transition-all bg-primary text-white px-6 py-3 mt-3 grid place-content-center rounded-md hover:bg-[#FDC040] hover:-translate-y-1">
        <button className="flex items-center gap-2">
          <span className="w-4 h-4">
            <ShoppingCart className="w-full h-full" />
          </span>
          <span className="font-medium">{trans("addToCart")}</span>
        </button>
      </div>
    </section>
  );
}
