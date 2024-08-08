import ProductsContainer from "../components/ProductsContainer";
import ViewDisplayMode from "../components/ProductsContainer/ViewDisplayMode";
import ShopBanner from "../components/shopBanner/ShopBanner";

export type ShopPageProps = {
  // props go here
};

function ShopPage() {
  return (
    <>
      <ShopBanner />
      <div className="container">
        <div className="md:flex md:flex-row md:justify-between md:gap-12 md:my-12">
          <div className="md:basis-1/4 md:mt-7 md:visible md:block md:z-0 z-[60] top-0 h-screen fixed md:relative rtl:right-0 ltr:left-0 w-10/12 sm:w-1/2 md:w-1/3 bg-white p-[10px] transition-all">
            <h2>sidebar</h2>
          </div>
          <div className="md:basis-3/4 mt-5 md:mt-0">
            <ViewDisplayMode />
            <ProductsContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
