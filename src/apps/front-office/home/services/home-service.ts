import { Meta, Product, Row } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";
import { apiKey, clientId } from "shared/flags";

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

export function getDailyBestSellsBannerDataSection(
  locale: string = "en",
): Promise<{ banner: { imageUrl: string; title: string } }> {
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

export function getDailyBestSellsDataSection(
  locale: string = "en",
): Promise<Product[]> {
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
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([]);
    }, 5000),
  );
}
