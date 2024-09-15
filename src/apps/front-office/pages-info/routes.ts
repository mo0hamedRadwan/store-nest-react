import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "../utils/urls";
import AboutUsPage from "./pages/AboutUsPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

publicRoutes([
  {
    path: URLS.pages.aboutUs,
    component: AboutUsPage,
  },
  {
    path: URLS.pages.termsConditions,
    component: TermsAndConditionsPage,
  },
]);
