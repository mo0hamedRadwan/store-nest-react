import CategorySidebar from "../../components/CategorySidebar";
import { debounce } from "@mongez/reinforcements";
import Banner from "apps/front-office/design-system/components/Banner";
import { useEffect, useRef, useState } from "react";
import FilterSide from "../../components/FilterSide";
import DealsDays from "../../sections/DealsDays";
import ProductsContainer from "../components/ProductsContainer";
import ViewDisplayMode from "../components/ProductsContainer/ViewDisplayMode";
import ShopBanner from "../components/shopBanner/ShopBanner";
import TrendingProducts from "../components/TrendingProducts";

function ShopPage() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      const section = sectionRef.current;

      if (sidebar && section) {
        const sidebarTop = sidebar.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;

        setIsSticky(sidebarTop < 0 && sectionTop > 0);
      } else {
        setIsSticky(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 300);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <ShopBanner />
      <div className="container">
        <div className="md:flex md:flex-row md:justify-between md:gap-12 md:my-12">
        <div className="relative lg:flex lg:flex-row lg:justify-between lg:gap-12 lg:my-12">
          <div className="basis-full lg:basis-10/12 mt-5 md:mt-0">
            <ViewDisplayMode />
            <ProductsContainer />

            {/* Deals Of The Day Component [Task] */}
            <DealsDays ref={sectionRef} />
            {/* Stay home Banner [Task Muhammad Darkdir] */}
          </div>
          {/* ./Left Side */}

          <div
            ref={sidebarRef}
            className={`${isSticky ? "sticky" : "relative"} top-0 h-full basis-full lg:basis-2/12`}>
            <div className="md:basis-1/4 md:mt-7 md:visible md:block md:z-0 z-[60] top-0 h-screen fixed md:relative rtl:right-0 ltr:left-0 w-10/12 sm:w-1/2 md:w-1/3 bg-white p-[10px] transition-all">
              <h2>sidebar</h2>
            </div>
            <div className="md:basis-3/4 mt-5 md:mt-0">
              <ViewDisplayMode />
              <ProductsContainer />
              <CategorySidebar />
            </div>
            <FilterSide />
            <TrendingProducts className="block max-w-56" />
            <Banner
              imageUrl="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png"
              title="Oraganic"
              Subtitle={() => (
                <>
                  Save 17% on <span className="text-primary">Oganic</span> Juice
                </>
              )}
            />
 
          </div>
          {/* ./Right Side */}
        </div>
    </div>
  );
}

export default ShopPage;