import { productQuickViewAtom } from "app/shop/atoms";
import Rating from "design-system/components/Rating";
import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { cn } from "design-system/utils";
import { ShoppingCart, X } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function QuickView() {
  const visible = productQuickViewAtom.use("opened");
  const product = productQuickViewAtom.get("product");

  // TODO: Display a loader while loading product data

  return (
    <div
      className={cn({
        "flex items-center justify-center fixed w-full h-full bg-black bg-opacity-50 z-40 transition-all duration-300 ease-in-out overflow-y-scroll":
          true,
        "opacity-100 visible": visible,
        "opacity-0 invisible": !visible,
      })}
      onClick={event => {
        // Don't Close the modal if the user clicks on the modal content
        if (event.target !== event.currentTarget) return;
        productQuickViewAtom.close();
      }}>
      <div className="relative bg-white w-full md:max-w-4xl flex flex-col md:flex-row items-center border border-green-200 rounded-lg">
        <button
          className="close-button absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:-top-4 p-2 text-white bg-orange-400 rounded-full w-10 h-10"
          onClick={productQuickViewAtom.close}>
          <X />
        </button>

        <div className="images p-7 w-full max-w-xl md:max-w-sm">
          {/* Main Image */}
          <img
            src={product?.images[0].url}
            alt={product?.name}
            className="product-image rounded-lg shadow-sm shadow-slate-400"
          />

          {/* Mini Images */}
          <div className="mt-7">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSwiper={swiper => console.log(swiper)}
              onSlideChange={s => console.log("slide change", s)}>
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div key={index}>
                    <img
                      src={product?.images[index]?.url || ""}
                      alt={product?.name}
                      className="rounded-lg"
                    />
                    {/* ./product-image  */}
                  </div>
                </SwiperSlide>
                // ./image-wrapper
              ))}
            </Swiper>
          </div>
          {/* ./mini-images */}
        </div>
        {/* ./Product Images */}

        <div className="product-info p-7">
          {/* Produc Badge Status */}
          <div className="badge bg-red-100 text-red-500 font-bold w-fit px-2 py-1">
            Sale off
          </div>
          {/* ./Product Status */}

          <h2 className="text-2xl sm:text-4xl font-bold my-3 ">
            {product?.name}
          </h2>

          <div className="rate flex items-center text-sm">
            <Rating rate={product?.rating || 1} className="w-5 h-5" />{" "}
            <span className="text-muted-foreground ml-1">(32 reviews)</span>
          </div>
          {/* ./Product Reviews */}

          <div className="flex gap-3 my-6">
            <p className="text-primary font-bold text-5xl">$38</p>
            <p>
              <span className="block text-center font-bold text-xs text-secondary">
                {product?.discount.percentage}% Off
              </span>
              {/* ./Product Discount */}
              <span className="block text-center font-bold text-3xl text-slate-500 line-through">
                ${product?.salePrice}
              </span>
              {/* ./Product Price Before Discount */}
            </p>
          </div>
          {/* ./Product Price */}

          <div className="flex flex-col flex-wrap sm:flex-row gap-3">
            {/* ./Quantity */}
            <Input type="number" defaultValue={1} className="w-fit p-6" />
            {/* ./AddtoCart */}
            <Button className="flex items-center gap-2 bg-primary h-auto">
              <ShoppingCart /> Add to Cart
            </Button>
          </div>
          {/* ./Product Qqantity + Cart */}

          <div className="vendor-info my-10">
            <p className="text-muted-foreground text-sm">
              Vendor: <span className="text-primary">{product?.type}</span>
            </p>
            <p className="text-muted-foreground text-sm">
              MFG: <span className="text-primary">#98123</span>
            </p>
          </div>
        </div>
      </div>
      {/* ./product-details */}
    </div>
    // {/* ./modal */}
  );
}
