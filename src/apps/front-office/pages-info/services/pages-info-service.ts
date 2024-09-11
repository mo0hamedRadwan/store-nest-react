import endpoint from "shared/endpoint";

/**
 * Get PagesInfos list
 */
export function getPagesInfosList(params: any = {}) {
  return endpoint.get("/pages-info", {
    params,
  });
}

/**
 * Get pages-info details
 */
export function getPagesInfo(id: string | number) {
  return endpoint.get("/pages-info/" + id);
}
