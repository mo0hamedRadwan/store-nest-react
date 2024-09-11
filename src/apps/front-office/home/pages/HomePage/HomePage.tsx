import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import Loader from "src/apps/front-office/design-system/Indicators/Loader";
import { Row } from "src/apps/front-office/utils/types";
import { getHome } from "../../services/home-service";
import PopularProducts from "./components/PopularProducts";
import "./HomePage.css";
import DealsDayTwo from "./sections/DealsDayTwo/DealsDayTwo";
import FeaturedCategories from "./sections/FeaturedCategories";
import Slider from "./sections/Slider";

export default function HomePage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [error, setError] = useState<string>("");

  useOnce(() => {
    setLoading(true);
    getHome()
      .then(response => {
        console.log(response.data.rows);
        setRows(response.data.rows);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  });

  // const { data1, _loading } = useFetchDeals();
  // console.log(data1);
  // const deals = [
  //   {
  //     imageSrc: "/img/banner-5.png",
  //     title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: "4.0",
  //     by: "NestFood",
  //     price: "32.85",
  //     oldPrice: "33.8",
  //     timeCards: [
  //       { time: "2", type: "Days" },
  //       { time: "14", type: "Hours" },
  //       { time: "20", type: "Mins" },
  //       { time: "30", type: "Secs" },
  //     ],
  //   },
  //   {
  //     imageSrc: "/img/banner-6.png",
  //     title: "Perdue Simply Smart Organics Gluten Free",
  //     rating: "4.5",
  //     by: "Old El Paso",
  //     price: "24.85",
  //     oldPrice: "26.8",
  //     timeCards: [
  //       { time: "1", type: "Days" },
  //       { time: "10", type: "Hours" },
  //       { time: "30", type: "Mins" },
  //       { time: "45", type: "Secs" },
  //     ],
  //   },
  //   {
  //     imageSrc: "/img/banner-7.png",
  //     title: "Signature Wood-Fired Mushroom and Caramelized",
  //     rating: "3.0",
  //     by: "Progresso",
  //     price: "12.85",
  //     oldPrice: "13.8",
  //     timeCards: [
  //       { time: "3", type: "Days" },
  //       { time: "6", type: "Hours" },
  //       { time: "45", type: "Mins" },
  //       { time: "50", type: "Secs" },
  //     ],
  //   },
  //   {
  //     imageSrc: "/img/banner-8.png",
  //     title: "Simply Lemonade with Raspberry Juice",
  //     rating: "3.0",
  //     by: "Yoplait",
  //     price: "15.85",
  //     oldPrice: "16.8",
  //     timeCards: [
  //       { time: "0", type: "Days" },
  //       { time: "8", type: "Hours" },
  //       { time: "50", type: "Mins" },
  //       { time: "10", type: "Secs" },
  //     ],
  //   },
  // ];

  // useOnce(() => {
  //   getHome()
  //     .then(response => {
  //       setData(response);
  //       const categories =
  //         response.rows[2].columns[0]?.module?.categories || [];
  //       const products = categories.flatMap(
  //         category => category.products || [],
  //       );
  //       popularProductsAtom.change("products", products);
  //       setLoading(false);
  //     })
  //     .catch(_error => {
  //       toast(_error || trans("someThingWantWrong"));
  //     });
  // });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="container">
        <Slider
          sliderData={rows[0].columns[0].module.slider!.banners}
          isLoading={loading}
        />

        <FeaturedCategories moduleName={rows[1].columns[0].module.name} />
        {/* <div className="App">
          <DailyBestSellsSection />
        </div> */}
        <PopularProducts />
      </div>

      <DealsDayTwo columns={rows[3].columns} />
      {/* <SectionWrapper>
        <Header title="Deals Of The Day" linkText="All Deals" linkHref="#" />
        <DealList deals={data1.slice(0, 4)} timeCards={deals} />
      </SectionWrapper> */}
    </>
  );
}
