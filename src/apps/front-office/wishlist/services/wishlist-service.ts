import endpoint from "shared/endpoint";

/**
 * Get Wishlists list
 */
export function getWishlist() {
  return endpoint.get("/wishlist");
}

/**
 * Get wishlist details
 */

export function addToWishlist(productId: string) {
  return endpoint.post(`/wishlist/${productId}`);
}

export function removeFromWishlist(productId: string) {
  return endpoint.delete(`/wishlist/${productId}`);
}
