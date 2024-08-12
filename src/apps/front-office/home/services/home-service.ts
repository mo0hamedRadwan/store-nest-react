import { getCurrentLocaleCode } from "@mongez/localization";
import { Meta, Product, Row } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";
import { apiKey, clientId } from "shared/flags";

const currentLanguage = getCurrentLocaleCode();

export type HomeData = {
  meta: Meta;
  rows: Row[];
};

export async function getHome(): Promise<HomeData> {
  const response = await endpoint.get("/home");
  return {
    meta: response.data.meta,
    rows: response.data.rows,
  };
}

export function getDailyBestSellsBannerDataSection(): Promise<{
  // locale: string = "en",
  banner: { imageUrl: string; title: string };
}> {
  return endpoint
    .get(`/home`, {
      // ?locale=${locale}
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "client-id": clientId,
      },
    })
    .then(response => {
      const { data } = response;
      const { rows } = data;
      const { title, image } = rows[4].columns[0].module.banner;

      return {
        banner: {
          imageUrl: image.url,
          title: title,
        },
      };
    });
}

export function getDailyBestSellsDataSection(): Promise<Product[]> {
  // locale: string = "en",
  return endpoint
    .get(`/products?wf=true`) // &locale=${locale}
    .then(response => {
      const { data } = response;
      const { products } = data;

      return products;
    })
    .catch(error => {
      console.log("error", error);
    });
}

export function getCategories() {
  return endpoint.get(`/categories?locale=${currentLanguage}`);
}

export function filterProducts(productName: string, categoryId?: string) {
  return endpoint.get(
    `/products?name=${productName}${categoryId ? `&category=${categoryId}` : ""}&locale=${currentLanguage}`,
  );
}
