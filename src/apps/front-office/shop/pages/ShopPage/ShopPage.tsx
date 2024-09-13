import ShopBanner from "../components/shopBanner/ShopBanner";

function ShopPage() {
  // const sidebarRef = useRef<HTMLDivElement>(null);
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sidebar = sidebarRef.current;
  //     const section = sectionRef.current;

  //     if (sidebar && section) {
  //       const sidebarTop = sidebar.getBoundingClientRect().top;
  //       const sectionTop = section.getBoundingClientRect().top;

  //       setIsSticky(sidebarTop < 0 && sectionTop > 0);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   const debouncedHandleScroll = debounce(handleScroll, 300);
  //   window.addEventListener("scroll", debouncedHandleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", debouncedHandleScroll);
  //   };
  // }, []);

  return (
    <div className="relative">
      <ShopBanner />
      <div className="container">
        <div className="md:flex md:flex-row md:justify-between md:gap-12 md:my-12">
          <div className="basis-full lg:basis-10/12 mt-5 md:mt-0">
            {/* <ViewDisplayMode /> */}
            {/* <ProductsContainer /> */}

            {/* Deals Of The Day Component [Task] */}
            {/* <DealsDays ref={sectionRef} /> */}
            {/* Stay home Banner [Task Muhammad Darkdir] */}
          </div>
          {/* ./Left Side */}

          {/* <div
            ref={sidebarRef}
            className={`${isSticky ? "sticky" : "relative"} top-0 h-full basis-full lg:basis-2/12`}>
            <CategorySidebar />
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
          </div> */}
          {/* ./Right Side */}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
