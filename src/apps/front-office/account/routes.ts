import LoginPage from "../home/pages/Login/LoginPage";
import { reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";

reverseGuardedRoutes([
  // login routes
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
]);
