import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([]);
    }, 5000),
  );
}
