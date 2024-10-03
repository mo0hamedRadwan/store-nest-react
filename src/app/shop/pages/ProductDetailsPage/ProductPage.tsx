import Helmet from "@mongez/react-helmet";
import { productAtom } from "app/shop/atoms/product.atom";
import { useProductDetails } from "app/shop/hooks/use-product-details";
import { ProductDetailsPageContent } from "app/shop/pages/ProductDetailsPage/ProductDetailsPageContent";
import Error from "design-system/components/Error";
import Loader from "design-system/components/ui/Indicators/Indicators";

export type NavItem = { name: string; url?: string };
export type NavItems = NavItem[] | undefined;

export type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { product, isLoading, error } = useProductDetails(params);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!product) return null;

  productAtom.silentUpdate(product);

  return (
    <>
      <Helmet
        title={product.name}
        image={product.images[0]?.url}
        description={product.shortDescription || product.description}
      />

      <ProductDetailsPageContent />
    </>
  );
}
