import { getCurrentLocaleCode } from "@mongez/localization";
import { Meta, Row } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";

const currentLanguage = getCurrentLocaleCode();

export type HomeData = {
  meta: Meta;
  rows: Row[];
};

export async function getHome(): Promise<HomeData> {
  const response = await endpoint.get("/home");
  // console.log("response", response.data);
  return {
    meta: response.data.meta,
    rows: response.data.rows,
  };
}

export function getCategories() {
  return endpoint.get(`/categories?locale=${currentLanguage}`);
}

export function filterProducts(productName: string, categoryId?: string) {
  return endpoint.get(
    `/products?name=${productName}${categoryId ? `&category=${categoryId}` : ""}&locale=${currentLanguage}`,
  );
}
