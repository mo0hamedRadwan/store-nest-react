import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import AboutUsPage from "./pages/AboutUsPage";
import InformativePagesPage from "./pages/InformativePagesPage";

publicRoutes([
  {
    path: URLS.informativePages,
    component: InformativePagesPage,
  },
  {
    path: URLS.aboutUS,
    component: AboutUsPage,
  },
]);
