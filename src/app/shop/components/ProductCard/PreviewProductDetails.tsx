import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { ProductProps } from "app/shop/utils/types";
import Stars from "design-system/components/Stars";
import { Badge } from "design-system/components/ui/badge";
import { Button } from "design-system/components/ui/button";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { price } from "shared/utils";

export function PreviewProductDetails({ product }: ProductProps) {
  const isOnSale = !!product.salePrice; // Simplified boolean check

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 max-w-screen-lg mx-auto">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full ">
        <div className="flex items-center justify-center cursor-pointer border rounded-md overflow-hidden w-full">
          <img
            src={`${product.images[0]?.url}?w=200&h=200`}
            alt={product.name}
            className="max-w-auto max-h-auto object-cover"
          />
        </div>
      </div>
      {/* Product Details Section */}
      <div className="flex flex-col w-full  px-4 md:px-[30px]">
        {/* Badge */}
        <div className="mb-2">
          {isOnSale ? (
            <Badge variant="danger">{trans("sale")}</Badge>
          ) : (
            <Badge variant="success">{trans("new")}</Badge>
          )}
        </div>
        {/* Product Name */}
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-[#253D4E] hover:text-[#FDC040] transition duration-500">
            <Link to="/">{product.name}</Link>
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 py-4">
          <Stars ratings={product.rating || 0} />
          <span className="text-[#B6B6B6] text-[14px]">
            ({product.rating || 0})
          </span>
        </div>
        {/* Pricing */}
        <div className="flex items-center gap-2 mt-4 mb-6">
          {isOnSale && (
            <span className="text-primary font-bold text-[58px]">
              {price(product.salePrice)}
            </span>
          )}
          <span
            className={`font-bold ${
              isOnSale
                ? "text-[#adadad] line-through text-[22px]"
                : "text-primary text-[58px]"
            }`}>
            {price(product.price)}
          </span>
        </div>
        {/* Quantity and Add to Cart Button */}
        <div className="flex items-center gap-4">
          <div className="border-2 border-primary rounded-md py-2 px-4 flex items-center gap-2">
            <span className="text-primary text-[16px] font-bold">1</span>
            <span className="text-primary text-[16px]">
              <ChevronUp size={18} />
              <ChevronDown size={18} />
            </span>
          </div>
          <Button className="w-full" variant="cart">
            <ShoppingCart size={15} />
            {trans("addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
}
