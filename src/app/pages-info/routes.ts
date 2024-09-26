import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import AboutUsPage from "./pages/AboutUsPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import privacyPage from "./pages/privacyPage";

publicRoutes([
  {
    path: URLS.pages.aboutUs,
    component: AboutUsPage,
  },
  {
    path: URLS.pages.termsConditions,
    component: TermsAndConditionsPage,
  },
  {
    path: URLS.pages.privacyPolicy,
    component: privacyPage,
  },
]);
