import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import PagesInfoPage from "./pages/PagesInfoPage";

publicRoutes([
  {
    path: URLS.pagesInfo,
    component: PagesInfoPage,
  },
]);
