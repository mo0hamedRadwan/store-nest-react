import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories() {
  return endpoint.get("/categories");
}

// export function getCategories() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           categories: [
//             { id: 1, name: "Electronics", slug: "electronics" },
//             { id: 2, name: "Clothing", slug: "clothing" },
//             { id: 3, name: "Home & Garden", slug: "home-garden" },
//             { id: 4, name: "Home & Garden", slug: "home-garden" },
//             { id: 5, name: "Home & Garden", slug: "home-garden" },
//             { id: 6, name: "Home & Garden", slug: "home-garden" },
//             { id: 7, name: "Home & Garden", slug: "home-garden" },
//             { id: 8, name: "Home & Garden", slug: "home-garden" },
//             { id: 9, name: "Home & Garden", slug: "home-garden" },
//             { id: 10, name: "Home & Garden", slug: "home-garden" },
//             { id: 11, name: "Home & Garden", slug: "home-garden" },
//             { id: 12, name: "Home & Garden", slug: "home-garden" },
//             { id: 13, name: "Home & Garden", slug: "home-garden" },
//             { id: 14, name: "Home & Garden", slug: "home-garden" },
//           ],
//         },
//       });
//     }, 5000);
//   });
// }

export function filterProducts(productName: string, categoryId?: string) {
  return endpoint.get(
    `/products?name=${productName}${categoryId ? `&category=${categoryId}` : ""}`,
  );
}
