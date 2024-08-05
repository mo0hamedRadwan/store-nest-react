import { Meta, Row } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";

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
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([]);
    }, 5000),
  );
}
