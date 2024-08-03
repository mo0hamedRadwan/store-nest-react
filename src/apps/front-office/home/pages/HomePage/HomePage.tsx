import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import DealList from "./components/DealsOfTheDay/DealList";
import Header from "./components/DealsOfTheDay/Header";
import SectionWrapper from "./components/DealsOfTheDay/SectionWrapper";

export default function HomePage() {
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

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <SectionWrapper>
        <Header title="Deals Of The Day" linkText="All Deals" linkHref="#" />
        <DealList deals={deals} />
      </SectionWrapper>
    </>
  );
}
