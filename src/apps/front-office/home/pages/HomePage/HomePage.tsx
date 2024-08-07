import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { toast } from "apps/front-office/design-system/components/ui/use-toast";
import { useState } from "react";
import { popularProductsAtom } from "../../atoms/popular-products-atom";
import { getHome, HomeData } from "../../services/home-service";
import DealList from "./components/DealsOfTheDay/DealList";
import Header from "./components/DealsOfTheDay/Header";
import SectionWrapper from "./components/DealsOfTheDay/SectionWrapper";
import PopularProducts from "./components/PopularProducts";
import "./HomePage.css";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";
import DealsDayTwo from "./sections/DealsDayTwo/DealsDayTwo";
import FeaturedCategories from "./sections/FeaturedCategories/FeaturedCategories";
import Slider from "./sections/Slider";

export default function HomePage() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const deals = [
    {
      imageSrc: "/img/banner-5.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: "4.0",
      by: "NestFood",
      price: "32.85",
      oldPrice: "33.8",
      timeCards: [
        { time: "2", type: "Days" },
        { time: "14", type: "Hours" },
        { time: "20", type: "Mins" },
        { time: "30", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-6.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      rating: "4.5",
      by: "Old El Paso",
      price: "24.85",
      oldPrice: "26.8",
      timeCards: [
        { time: "1", type: "Days" },
        { time: "10", type: "Hours" },
        { time: "30", type: "Mins" },
        { time: "45", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-7.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: "3.0",
      by: "Progresso",
      price: "12.85",
      oldPrice: "13.8",
      timeCards: [
        { time: "3", type: "Days" },
        { time: "6", type: "Hours" },
        { time: "45", type: "Mins" },
        { time: "50", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-8.png",
      title: "Simply Lemonade with Raspberry Juice",
      rating: "3.0",
      by: "Yoplait",
      price: "15.85",
      oldPrice: "16.8",
      timeCards: [
        { time: "0", type: "Days" },
        { time: "8", type: "Hours" },
        { time: "50", type: "Mins" },
        { time: "10", type: "Secs" },
      ],
    },
  ];

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
      <SectionWrapper>
        <Header title="Deals Of The Day" linkText="All Deals" linkHref="#" />
        <DealList deals={deals} />
      </SectionWrapper>
    </>
  );
}
