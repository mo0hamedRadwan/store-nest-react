import { Meta, Row } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";

export type HomeData = {
  meta: Meta;
  rows: Row[];
};
export type DealsData = {
  images: { url: string }[];
  price: number;
  salePrice: number;
  name: string;
  rating: number;
};

export async function getHome(): Promise<HomeData> {
  const response = await endpoint.get("/home");
  console.log("response", response.data);
  return {
    meta: response.data.meta,
    rows: response.data.rows,
  };
}
export async function getDeals(): Promise<DealsData[]> {
  const response = await endpoint.get("/products?wf=true&locale=en");
  console.log("response", response.data);
  return response.data.products;
}

export function getCategories() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([]);
    }, 5000),
  );
}
