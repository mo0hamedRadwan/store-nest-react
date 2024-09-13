import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ShopPage from "../shop/pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop.list,
    component: ShopPage,
  },
]);
