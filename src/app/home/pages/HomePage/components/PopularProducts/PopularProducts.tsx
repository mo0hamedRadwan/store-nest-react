import { popularProductsAtom } from "app/home/atoms/popular-products-atom";
import { Module } from "app/home/utils/types";
import { ProductsGrid } from "app/shop/components/ProductsGrid";
import PopularProductsTabs from "./PopularProductsTabs";

type PopularProductsModuleProps = {
  module: Module;
};

function PopularProductsList() {
  const products = popularProductsAtom.use("activeProducts");

  return <ProductsGrid products={products} />;
}

export default function PopularProducts({
  module,
}: PopularProductsModuleProps) {
  if (popularProductsAtom.get("products").length === 0) {
    const products = module.categories.flatMap(
      category => category.products || [],
    );
    popularProductsAtom.silentUpdate({
      products,
      activeProducts: products,
      activeTab: 0,
      tabs: [],
    });
  }

  return (
    <div className="mx-auto py-5 w-full">
      <PopularProductsTabs title={module.title} />
      <PopularProductsList />
    </div>
  );
}
