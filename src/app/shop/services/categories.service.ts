import { Category } from "app/shop/utils";
import endpoint from "shared/endpoint";

export async function getCategories(params?: any): Promise<Category[]> {
  const response = await endpoint.get(`/categories`, {
    params,
  });

  return response.data.categories;
}
