import { trans } from "@mongez/localization";
import { ShoppingCart } from "lucide-react";
import { IProductContent } from "shared/contracts/IProductContent";
import ProgressBar from "../../Indicators/ProgressBar";
import RateSection from "../RateSection";

export default function ProductContent({
  name,
  rate,
  price,
  discount,
  brandName,
  sold,
}: IProductContent) {
  const priceAfterDiscount = discount ? price - (price * discount) / 100 : null;

  return (
    <section className="product-content">
      <div className="product-category">
        <a
          href="/category/brand"
          className="text-slate-400 block text-xs font-normal my-1">
          {brandName}
        </a>
      </div>

      <div className="product-name">
        <a href="/products/:id" className="font-bold">
          {name}
        </a>
      </div>

      <div className="product-rate flex">
        <RateSection rate={rate} />
      </div>

      <div className="product-price flex gap-2 py-2">
        <span className="product-actual-price text-primary-soft font-bold text-lg">
          ${price}
        </span>

        {discount && (
          <span className="product-discount-price text-slate-500 font-medium line-through">
            ${priceAfterDiscount}
          </span>
        )}
      </div>

      <div className="product-sold py-2 space-y-2">
        <ProgressBar />

        <div className="product-sold-text text-sm">Sold: 90/120</div>
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
