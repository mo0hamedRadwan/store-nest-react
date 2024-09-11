import endpoint from "shared/endpoint";

/**
 * Get InformativePages list
 */
export function getInformativePagesList(params: any = {}) {
  return endpoint.get("/informative-pages", {
    params,
  });
}

/**
 * Get informative-pages details
 */
export function getInformativePage(id: string | number) {
  return endpoint.get("/informative-pages/" + id);
}
