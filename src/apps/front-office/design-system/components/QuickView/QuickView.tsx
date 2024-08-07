import { cn } from "@utils";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductQuickViewAtom from "apps/front-office/home/atoms/product-quick-view";
import { ShoppingCart, X } from "lucide-react";
import { IProduct } from "shared/contracts/IProduct";
import Rating from "../Rating";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import "swiper/css";

// export type QuickViewProps = IProduct;
// export default function QuickView({ images, body }: QuickViewProps) {

export default function QuickView() {
  const visible = ProductQuickViewAtom.use("visible");
  let product = ProductQuickViewAtom.get("product");

  console.log("PRODUVT", product, visible);

  if (!visible) {
    product = { images: {}, body: {} } as IProduct;
  }

  const { images, body } = product as IProduct;

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
        ProductQuickViewAtom.change("visible", false);
      }}>
      <div className="relative bg-white w-full md:max-w-4xl flex flex-col md:flex-row items-center border border-green-200 rounded-lg">
        <button
          className="close-button absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:-top-4 p-2 text-white bg-orange-400 rounded-full w-10 h-10"
          onClick={() => ProductQuickViewAtom.change("visible", false)}>
          <X />
        </button>

        <div className="images p-7 w-full max-w-xl md:max-w-sm">
          {/* Main Image */}
          <img
            src={images.background}
            alt={body.name}
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
                      src={images.background}
                      alt={body.name}
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

          <h2 className="text-2xl sm:text-4xl font-bold my-3 ">{body.name}</h2>
          {/* ./Produvt Name */}

          <div className="rate flex items-center text-sm">
            <Rating rate={body.rate!} className="w-5 h-5" />{" "}
            <span className="text-muted-foreground ml-1">(32 reviews)</span>
          </div>
          {/* ./Product Reviews */}

          <div className="flex gap-3 my-6">
            <p className="text-primary font-bold text-5xl">$38</p>
            <p>
              <span className="block text-center font-bold text-xs text-secondary">
                26% Off
              </span>
              {/* ./Product Discount */}
              <span className="block text-center font-bold text-3xl text-slate-500 line-through">
                $53
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
              Vendor: <span className="text-primary">{body.brandName}</span>
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
