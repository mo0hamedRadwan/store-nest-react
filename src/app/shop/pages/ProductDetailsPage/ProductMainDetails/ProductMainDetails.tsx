import ProductDescription from "../ProductDescription";
import ProductDetails from "../ProductDetails";
import ProductGallery from "../ProductGallery";

export default function ProductMainDetails() {
  return (
    <section className="main-details">
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-8 xl:col-span-6">
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 mb-10">
            <ProductGallery />
            <ProductDetails />
          </div>
          <ProductDescription />
        </div>
      </div>
    </section>
  );
}
