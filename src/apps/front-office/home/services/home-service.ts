import endpoint from "shared/endpoint";
import { apiAuthToken, apiClient } from "shared/flags";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([]);
    }, 5000),
  );
}

export async function getFooterData() {
  const response = await endpoint.get("https://store.mentoor.io/settings", {
    headers: {
      "client-id": apiClient,
      Authorization: `Bearer ${apiAuthToken}`,
      "Content-Type": "application/json",
    },
  });
  return {
    data: response?.data,
  };
}
