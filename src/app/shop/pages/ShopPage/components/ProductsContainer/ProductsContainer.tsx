import { shopDisplayModeAtom } from "app/shop/atoms/shop-display-mode-atom";
import { shopAtom } from "app/shop/atoms/shopAtom";
import { ProductsGrid } from "app/shop/components/ProductsGrid";
import Error from "design-system/components/Error";
import Loader from "design-system/components/ui/Indicators/Indicators";
import Paginator from "../Paginator";
import { ProductsList } from "./ProductsList";

export default function ProductsContainer() {
  const displayMode = shopDisplayModeAtom.useValue();
  const {
    loadingProducts: loading,
    error,
    products,
    totalPages,
    currentPage,
  } = shopAtom.useValue();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const Container = displayMode === "grid" ? ProductsGrid : ProductsList;

  return (
    <>
      <Container products={products} />
      <Paginator totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
