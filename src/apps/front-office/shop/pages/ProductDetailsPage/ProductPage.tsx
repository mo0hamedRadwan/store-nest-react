import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "apps/front-office/design-system/components/ui/breadcrumb";
import Loader from "apps/front-office/design-system/components/ui/Indicators/Indicators";
import URLS from "apps/front-office/utils/urls";
import React, { useState } from "react";
import { getProduct } from "../../services/shop-service";
import ProductMainDetails from "./ProductMainDetails";

export type NavItem = { name: string; url?: string };
export type NavItems = NavItem[] | undefined;

export type ProductPageProps = {
  params: {
    id: string;
  };
};

type DataState = {
  loading: boolean;
  error: any;
  product: any;
};

export default function ProductPage({ params }: ProductPageProps) {
  const [data, setData] = useState<DataState>({
    loading: true,
    error: null,
    product: null,
  });

  useOnce(() => {
    getProduct(params.id)
      .then(data => {
        setData({
          loading: false,
          error: null,
          product: data.product,
        });
      })
      .catch(error => {
        setData({
          loading: false,
          error: error,
          product: null,
        });
      });
  });

  if (data?.loading) {
    return <Loader />;
  }

  if (data?.error) {
    console.log(data?.error);
  }

  console.log(data);

  const navItems: NavItems = [
    {
      name: data?.product?.category?.name,
      url: URLS.shop.viewCategoryRoute,
    },
    { name: data?.product?.name },
  ];

  return (
    <>
      <Helmet title="Seeds of Change Organic Quinoa, Brown" />
      <Breadcrumb className="border-b border-gray-200 py-5">
        <div className="container">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={URLS.home}>{trans("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {navItems?.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.url ? (
                    <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < navItems.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </div>
      </Breadcrumb>
      <main className="product-page pt-6 pb-20">
        <div className="container">
          <ProductMainDetails product={data?.product} />
          {/* <RelatedProducts products={products}/> */}
        </div>
      </main>
    </>
  );
}
