import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.css";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <DailyBestSellsSection />
      </div>
    </>
  );
}
