import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";

publicRoutes([
  {
    path: URLS.shop.list,
    component: ShopPage,
  },
  { path: URLS.shop.viewCategoryRoute, component: CategoryPage },
  { path: URLS.shop.viewProductRoute, component: ProductDetailsPage },
]);
