import ProductsGrid from "apps/front-office/home/pages/HomePage/components/PopularProducts/ProductsGrid";
import Loader from "src/apps/front-office/design-system/components/ui/Indicators/Indicators";
import { shopDisplayModeAtom } from "src/apps/front-office/shop/atoms/shop-display-mode-atom";
import { shopAtom } from "src/apps/front-office/shop/atoms/shopAtom";
import Paginator from "../Paginator";
import ProductsList from "./ProductssList";

export default function ProductsContainer() {
  const displayMode = shopDisplayModeAtom.useValue();
  // const [currentPage, setCurrentPage] = useState(1);
  // const { products, error, loading, pagination } =
  // useFetchShopData(currentPage);
  const {
    loadingProducts: loading,
    error,
    products,
    totalPages,
    currentPage,
  } = shopAtom.useValue();

  // useEffect(() => {
  //   shopAtom.getProducts();
  // }, [currentPage]);

  if (loading) {
    return <Loader />;
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

  const Container = displayMode === "grid" ? ProductsGrid : ProductsList;

  return (
    <>
      <Container products={products} />
      <Paginator totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
