import endpoint from "shared/endpoint";

// get the categories

export async function getCategory() {
  const response = await endpoint.get(
    "https://store.mentoor.io/categories?page=1",
  );
  return {
    data: response.data.categories,
  };
}

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
