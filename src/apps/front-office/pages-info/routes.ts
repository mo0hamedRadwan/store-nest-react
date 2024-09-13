import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import PagesInfoPage from "./pages/PagesInfoPage";
import PrivacyPage from "./pages/privacyPage";

publicRoutes([
  {
    path: URLS.pagesInfo,
    component: PagesInfoPage,
  },
  {
    path: URLS.pages.privacyPolicy,
    component: PrivacyPage,
  },
]);
