import { ProductCard } from "app/shop/components/ProductCard";
import { Product } from "app/shop/utils/types";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type RelatedProductsProps = {
  products: Product[];
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="related=products mb-8">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-full">
          {products.map(product => (
            <SwiperSlide
              key={product.id}
              className="h-full rounded-xl overflow-hidden">
              <ProductCard product={product} key={product.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
