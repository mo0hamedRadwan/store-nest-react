import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories() {
  return endpoint.get("/categories");
}

export function filterProducts(productName: string, categoryId?: string) {
  return endpoint.get(
    `/products?name=${productName}${categoryId ? `&category=${categoryId}` : ""}`,
  );
}
