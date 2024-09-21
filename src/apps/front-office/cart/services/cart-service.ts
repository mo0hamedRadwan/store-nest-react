import endpoint from "shared/endpoint";

/**
 * Get cart details
 */
export function getCart() {
  return endpoint.get("/cart");
}

/**
 * Add product to cart
 */
export function addToCart(product: number, quantity = 1) {
  return endpoint.post("/cart", { product, quantity });
}

export function updateCart(item: number, quantity: number) {
  return endpoint.put("/cart/items/" + item, { quantity });
}

/**
 * Remove item from cart
 */
export function removeFromCart(item: number) {
  return endpoint.delete("/cart/items/" + item);
}
