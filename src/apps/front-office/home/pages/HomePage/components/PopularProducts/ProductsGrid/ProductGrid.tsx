import { Product } from "apps/front-office/utils/types";
import ProductCard from "../ProductCard";

export type ProductGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 lg:gap-10 pt-6 pb-20 justify-items-center px-4 md:px-0">
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
