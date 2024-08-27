import { Product } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";

import { apiKey, appClientId } from "shared/flags";

/* @route GET /products?wf=true
 * @description Get Shop Data (all in one request)
 * @access Private
 */
export function getShopPageData() {
  return endpoint.get("/products?wf=true", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "client-id": appClientId,
    },
  });
}

/**
 * Get Product details
 */
type ProductData = {
  product: Product;
};
export async function getProduct(id: string | number): Promise<ProductData> {
  const response = await endpoint.get("/products/" + id);
  return {
    product: response?.data?.product,
  };
}

/**
 * Add product to cart
 */
export function addToCart(id: number, quantity = 1) {
  return endpoint.post("/cart", { id, quantity });
}
