import ProductsGrid from "apps/front-office/home/pages/HomePage/components/PopularProducts/ProductsGrid";
import { shopDisplayModeAtom } from "apps/front-office/shop/atoms/shop-display-mode-atom";
import MealsList from "./ProductssList";

import useFetchShopData from "apps/front-office/shop/hooks/use-fetch-shop-data";
import { shopDataAtom } from "../../../atoms/shop-data.atom";

export default function ProductsContainer() {
  const { data, loading, error, fetch } = useFetchShopData();
  const displayMode = shopDisplayModeAtom.useValue();
  shopDataAtom.change("fetch", fetch);

  if (loading) {
    return <h1 className="text-5xl text-priamry text-center">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="text-5xl text-priamry text-center">
        Error
        <br />
        <span className="text-sm">{error}</span>
      </h1>
    );
  }

  const Container = displayMode === "grid" ? ProductsGrid : MealsList;

  return <Container products={data.products} />;
}
