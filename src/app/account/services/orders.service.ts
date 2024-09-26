import endpoint from "src/shared/endpoint";

export function getOrders() {
  return endpoint.get("/orders");
}
