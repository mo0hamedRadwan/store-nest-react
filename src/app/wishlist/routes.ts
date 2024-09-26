import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import WishlistPage from "./pages/WishlistPage";

publicRoutes([
  {
    path: URLS.wishlist,
    component: WishlistPage,
  },
]);
