import endpoint from "shared/endpoint";

export function getOrders() {
  return endpoint.get("/orders");
}
