import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

publicRoutes([
  {
    path: URLS.pages.termsConditions,
    component: TermsAndConditionsPage,
  },
]);
