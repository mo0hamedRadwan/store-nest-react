import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import PopularProducts from "../components/PopularProducts";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <PopularProducts />
    </>
  );
}
