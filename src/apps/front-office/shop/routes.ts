import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ProductPage from "./pages/ProductDetailsPage/ProductPage";
import ShopPage from "./pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop.list,
    component: ShopPage,
  },
  {
    path: URLS.shop.viewProductRoute,
    component: ProductPage,
  },
]);
