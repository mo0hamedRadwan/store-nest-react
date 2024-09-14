import { Product } from "../../../utils/types";
import ProductDescription from "../ProductDescription";
import ProductDetails from "../ProductDetails";
import ProductGallery from "../ProductGallery";

export type ProductMainDetailsProps = {
  product: Product;
};

export default function ProductMainDetails({
  product,
}: ProductMainDetailsProps) {
  return (
    <section className="main-details">
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-8 xl:col-span-6">
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 mb-10">
            <ProductGallery images={product.images} />
            <ProductDetails product={product} />
          </div>
          <ProductDescription product={product} />
        </div>
      </div>
    </section>
  );
}
