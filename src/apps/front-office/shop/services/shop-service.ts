import endpoint from "shared/endpoint";

import { apiKey, appClientId } from "shared/flags";

/**
 * @route GET /products?wf=true
 * @description Get Shop Data (all in one request)
 * @access Private
 */
export function getShopPageData(query) {
  return endpoint.get(`/products?wf=true&${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "client-id": appClientId,
    },
  });
}
