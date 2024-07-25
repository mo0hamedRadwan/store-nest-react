import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { products } from "apps/front-office/utils/data";
import { useState } from "react";
import { popularProductsAtom } from "../../atoms/popular-products-atom";
import PopularProducts from "../components/PopularProducts";

export default function HomePage() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setData(products);
    popularProductsAtom.change("products", products);
  };

  useOnce(() => {
    fetchData();
  });

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      {data && <PopularProducts />}
    </>
  );
}
