import { getCurrentLocaleCode } from "@mongez/localization";
import { Meta, Row } from "apps/front-office/utils/types";
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

export function getDailyBestSellsDataSection(locale: string = "en") {
  return endpoint
    .get(`/home?locale=${locale}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "client-id": clientId,
      },
    })
    .then(response => {
      const { data } = response;
      const { rows } = data;
      const categories = rows[2].columns[0].module.categories;
      const products = rows[3].columns[0].module.products;
      const { title, image } = rows[4].columns[0].module.banner;

      return {
        categories,
        products,
        banner: {
          imageUrl: image.url,
          title: title,
        },
      };
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
