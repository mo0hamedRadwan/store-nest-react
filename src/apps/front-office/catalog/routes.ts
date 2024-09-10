import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import CatalogPage from "./pages/CatalogPage";

publicRoutes([
  {
    path: URLS.catalog,
    component: CatalogPage,
  },
]);
