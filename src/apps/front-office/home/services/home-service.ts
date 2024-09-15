import endpoint from "src/shared/endpoint";
import { Row } from "../utils/types";

export function getFooterData() {
  return endpoint.get("/settings");
}

export async function getHome(): Promise<Row[]> {
  const response = await endpoint.get("/home");

  return response.data.rows;
}

export function getCategories(params?: any) {
  return endpoint.get(`/categories`, {
    params,
  });
}

export function getProducts(params?: any) {
  return endpoint.get(`/products`, {
    params,
  });
}

export function getCartItems(params?: any) {
  return endpoint.get(`/cart`, {
    params,
  });
}

export function addToCart(data: any) {
  return endpoint.post(`/cart`, data);
}

export function removeFromCart(data: any) {
  return endpoint.delete(`/cart`, {
    data,
  });
}

export function getWishlist(params?: any) {
  return endpoint.get(`/wishlists`, {
    params,
  });
}

export function addToWishlist(data: any) {
  return endpoint.post(`/wishlists`, data);
}

export function removeFromWishlist(data: any) {
  return endpoint.delete(`/wishlists`, {
    data,
  });
}
