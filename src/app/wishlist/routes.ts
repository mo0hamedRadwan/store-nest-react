import { guardedRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import WishlistPage from "./pages/WishlistPage";

guardedRoutes([
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
]);
