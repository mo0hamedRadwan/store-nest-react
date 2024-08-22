import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import productImg10 from "assets/images/topselling/thumbnail-10.jpg";
import productImg11 from "assets/images/topselling/thumbnail-11.jpg";
import productImg12 from "assets/images/topselling/thumbnail-12.jpg";
import TrendingProduct from "./TrendingProduct";

type TrendingProductsProps = React.HTMLAttributes<HTMLDivElement>;

export default function TrendingProducts(attributes: TrendingProductsProps) {
  return (
    <div {...attributes}>
      <div>
        <TopSellingHead productTitle="Trending Products" />
      </div>
      <div>
        <TrendingProduct
          title="Chen Cardigan"
          price={100}
          image={productImg10}
        />
        <TrendingProduct
          title="Chen Sweater"
          price={100}
          image={productImg11}
        />
        <TrendingProduct
          title="Colorful Jacket"
          price={100}
          image={productImg12}
        />
      </div>
    </div>
  );
}
