import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import CartPage from "./pages/CartPage";

publicRoutes([
  {
    path: URLS.cart,
    component: CartPage,
  },
]);
