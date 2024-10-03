import { ProductCard } from "app/shop/components/ProductCard";
import { Product } from "app/shop/utils";

export function ProductsGrid({ products }: { products: Product[] }) {
  if (!products?.length) return null;

  return (
    <div className="grid grid-cols-1 flex-wrap sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-6 pb-5 justify-items-center">
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
