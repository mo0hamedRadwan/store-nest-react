import { Product } from "app/shop/utils/types";
import ListProductCard from "../ListProductCard";

type ProductsListProps = {
  products: Product[];
};

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-col">
      {products.map(product => {
        return <ListProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
