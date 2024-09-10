import endpoint from "src/shared/endpoint";

// const currentLanguage = getCurrentLocaleCode();

// export type HomeData = {
//   meta: Meta;
//   rows: Row[];
// };

// export async function getHome(): Promise<HomeData> {
//   const response = await endpoint.get("/home");
//   return {
//     meta: response.data.meta,
//     rows: response.data.rows,
//   };
// }
// export async function useGetDeals(): Promise<DealsData[]> {
//   const response = await endpoint.get("/products?wf=true&locale=en");
//   console.log("response", response.data);
//   return response.data.products;
// }

// export function getDailyBestSellsDataSection(): Promise<Product[]> {
//   // locale: string = "en",
//   return endpoint
//     .get(`/products?wf=true`) // &locale=${locale}
//     .then(response => {
//       const { data } = response;
//       const { products } = data;

//       return products;
//     })
//     .catch(error => {
//       console.log("error", error);
//     });
// }

// export function getCategories() {
//   return endpoint.get(`/categories?locale=${currentLanguage}`);
// }

// export function filterProducts(productName: string, categoryId?: string) {
//   return endpoint.get(
//     `/products?name=${productName}${categoryId ? `&category=${categoryId}` : ""}&locale=${currentLanguage}`,
//   );
// }

// export async function getFeaturedCategoryData(locale: string = "en") {
//   const response = await endpoint.get(`/home?${locale}=${locale}?layout=1`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//       "client-id": clientId,
//     },
//   });

//   const { data } = response;
//   const { rows } = data;
//   const sectionTitle = rows[1].columns[0].module.title;
//   const categories = rows[2].columns[0].module.categories;
//   // const categories = rows[1].columns[0].module.categories;
//   // console.log(`sectionTitle is ${JSON.stringify(sectionTitle)}`);
//   // console.log(`categories is ${JSON.stringify(categories)}`);
//   // console.log(`all result are ${JSON.stringify(rows)}`);

//   return {
//     sectionTitle,
//     categories,
//   };
// }

export function getFooterData() {
  return endpoint.get("/settings");
}

export function getHome() {
  return endpoint.get("/home");
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
