import { Product } from "app/shop/utils";
import { PaginationInfo } from "app/utils/types";
import endpoint from "shared/endpoint";

type ProductSearchParams = {
  q?: string;
  category?: number;
  brand?: number;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  orderBy?: string;
  limit?: number;
};

export async function getProducts(params?: ProductSearchParams): Promise<{
  products: Product[];
  paginationInfo: PaginationInfo;
}> {
  const response = await endpoint.get(`/products`, {
    params,
  });

  return {
    products: response.data.products,
    paginationInfo: response.data.paginationInfo,
  };
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
