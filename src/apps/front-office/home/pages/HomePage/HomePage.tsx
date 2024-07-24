import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Button } from "apps/front-office/design-system/components/ui/button";
import "./HomePage.css";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <Button className="bg-primary-default hover:bg-primary-dark font-custom">
        Welcome Home
      </Button>

      <div className="App">
        <DailyBestSellsSection />
      </div>
    </>
  );
}
