import Banner from "src/apps/front-office/design-system/components/Banner";
import TopSelling from "src/apps/front-office/home/pages/HomePage/sections/DealsDayTwo/TopSelling";
import CategorySidebar from "./components/CategorySidebar";
import FilterSide from "./components/FilterSide";
import ProductsContainer from "./components/ProductsContainer";
import ViewDisplayMode from "./components/ProductsContainer/ViewDisplayMode";
import DealsDays from "./components/sections/DealsDays";
import ShopBanner from "./components/ShopBanner";

function ShopPage() {
  return (
    <div>
      <ShopBanner />
      <div className="flex flex-col md:flex-row md:gap-8 my-6 md:my-12">
        {/* Left Side - Main Content */}
        <div className="basis-full lg:basis-4/5 mt-5 md:mt-0">
          <ViewDisplayMode />
          <ProductsContainer />
          <DealsDays />
        </div>
        {/* Right Side - Sidebar */}
        <div className="basis-full lg:basis-[20%] mt-8 lg:mt-0">
          <div className="sticky top-0">
            <CategorySidebar />
            <FilterSide />
            {/* <TopSelling moduleName="trending products" /> */}
            <Banner
              imageUrl="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png"
              title="Organic"
              Subtitle={() => (
                <>
                  Save 17% on <span className="text-primary">Organic</span>{" "}
                  Juice
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
