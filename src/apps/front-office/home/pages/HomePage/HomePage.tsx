import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import FeaturedCategories from "./sections/FeaturedCategories/FeaturedCategories";


export default function HomePage() {


  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <FeaturedCategories />
    </>
  );
}
