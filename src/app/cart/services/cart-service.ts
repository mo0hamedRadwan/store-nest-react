import endpoint from "shared/endpoint";

/**
 * Get cart details
 */

export async function getCart() {
  return endpoint.get("/cart");
}

/**
 * Add product to cart
 */
export function addToCart(product: number, quantity = 1) {
  return endpoint.post("/cart", { product, quantity });
}

export function updateCart(item: number, quantity: number) {
  return endpoint.put("/cart/" + item, { quantity });
}

/**
 * Remove item from cart
 */
export function removeFromCart(itemId: string) {
  return endpoint.delete(`/cart/${itemId}`);
}
