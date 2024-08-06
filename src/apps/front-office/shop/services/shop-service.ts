<<<<<<< HEAD
import endpoint from "shared/endpoint";

/**
 * Get Shops list
 */
export function getShopsList(params: any = {}) {
  return endpoint.get("/shop", {
    params,
  });
}

/**
 * Get shop details
 */
export function getShop(id: string | number) {
  return endpoint.get("/shop/" + id);
}
=======
import endpoint from "shared/endpoint";

import { apiKey, appClientId } from "shared/flags";

/**
 * @route GET /products?wf=true
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
>>>>>>> 61b3a45 (feat/shop-page)
