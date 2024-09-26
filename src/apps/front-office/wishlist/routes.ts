import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import WishlistPage from "./pages/WishlistPage";

publicRoutes([
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
]);
