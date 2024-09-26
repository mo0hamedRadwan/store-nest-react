import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import HomePage from "./pages/HomePage";

publicRoutes([
  {
    path: URLS.home,
    component: HomePage,
  },
]);
