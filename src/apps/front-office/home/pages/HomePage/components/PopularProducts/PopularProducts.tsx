import { popularProductsAtom } from "src/apps/front-office/home/atoms/popular-products-atom";
import { Module } from "src/apps/front-office/home/utils/types";
import PopularProductsTabs from "./PopularProductsTabs";
import ProductsGrid from "./ProductsGrid";
type PopularProductsModuleProps = {
  module: Module;
};
export default function PopularProducts({
  module,
}: PopularProductsModuleProps) {
  const products = module.categories.flatMap(
    category => category.products || [],
  );
  popularProductsAtom.change("products", products);
  products.length = 10;
  return (
    <div className="mx-auto py-20 w-full">
      <PopularProductsTabs moduleName={module.title} />
      <ProductsGrid products={products} />
    </div>
  );
}
