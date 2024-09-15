import ProductCard from "src/apps/front-office/home/pages/HomePage/components/PopularProducts/ProductCard";
import useFetchShopData from "src/apps/front-office/shop/hooks/use-fetch-shop-data";
import Paginator from "src/apps/front-office/shop/pages/ShopPage/components/Paginator";
import Loader from "../ui/Indicators/Indicators";

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 flex-wrap sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-6 pb-20 justify-items-center">
      {currentItems &&
        currentItems.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

function PaginatedItems() {
  const { data, loading, pagination } = useFetchShopData();

  return (
    <>
      {loading && (
        <>
          <Loader />
        </>
      )}
      {!loading && (
        <>
          <Items currentItems={data} />
          <Paginator pagination={pagination} />
        </>
      )}
    </>
  );
}

export default PaginatedItems;
