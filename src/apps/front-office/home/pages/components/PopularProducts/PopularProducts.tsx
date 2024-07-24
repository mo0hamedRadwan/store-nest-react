import { products } from "apps/front-office/utils/data";
import ProductsGrid from "./ProductsGrid";
export type PopularProductsProps = {
  children: React.ReactNode;
};
export default function PopularProducts() {
  const product = products;

  return <ProductsGrid products={product} />;
}
