import { trans } from "@mongez/localization";
import { productAtom } from "app/shop/atoms/product.atom";
import { NavItems } from "app/shop/pages/ProductDetailsPage/ProductPage";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "design-system/components/ui/breadcrumb";
import React from "react";
import { URLS } from "shared/utils";
import ProductMainDetails from "./ProductMainDetails";

export function ProductDetailsPageContent() {
  const product = productAtom.useValue();

  const navItems: NavItems = [
    {
      name: product.category?.name,
      url: URLS.shop.viewCategory(product.category),
    },
    { name: product.name },
  ];

  return (
    <>
      <Breadcrumb className="border-b border-gray-200 py-5">
        <div className="container">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={URLS.home}>{trans("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {navItems.map((item, index) => (
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
          <ProductMainDetails />
          {/* <RelatedProducts products={products}/> */}
        </div>
      </main>
    </>
  );
}
