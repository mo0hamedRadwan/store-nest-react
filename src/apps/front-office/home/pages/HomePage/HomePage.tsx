import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { toast } from "apps/front-office/design-system/components/ui/use-toast";
import { useState } from "react";
import { popularProductsAtom } from "../../atoms/popular-products-atom";
import { getHome, HomeData } from "../../services/home-service";
import PopularProducts from "./components/PopularProducts";
import "./HomePage.css";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";
import DealsDayTwo from "./sections/DealsDayTwo/DealsDayTwo";
import FeaturedCategories from "./sections/FeaturedCategories/FeaturedCategories";
import Slider from "./sections/Slider";

export default function HomePage() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useOnce(() => {
    getHome()
      .then(response => {
        setData(response);
        const categories =
          response.rows[2]?.columns[0]?.module?.categories || [];
        const products = categories.flatMap(
          category => category.products || [],
        );
        popularProductsAtom.change("products", products);
        setLoading(false);
      })
      .catch(_error => {
        toast(_error || trans("someThingWantWrong"));
      });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <Slider />
      <FeaturedCategories />
      <div className="App">
        <DailyBestSellsSection />
      </div>
      {data && <PopularProducts />}
      <Button className="bg-primary-default hover:bg-primary-dark font-custom">
        Welcome Home
      </Button>
      <div>
        <DealsDayTwo />
      </div>
    </>
  );
}
