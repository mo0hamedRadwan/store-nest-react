import ProductsGrid from "apps/front-office/home/pages/HomePage/components/PopularProducts/ProductsGrid";
import { shopDisplayModeAtom } from "apps/front-office/shop/atoms/shop-display-mode-atom";
import MealsList from "./ProductssList";

export default function ProductsContainer() {
  const products = [];
  const displayMode = shopDisplayModeAtom.useValue();

  const Container = displayMode === "grid" ? ProductsGrid : MealsList;

  return <Container products={products} />;
}
