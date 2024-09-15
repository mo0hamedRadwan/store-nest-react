import LoginPage from "../home/pages/Login/LoginPage";
import { publicRoutes, reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import AccountDashboardPage from "./pages/AccountDashboardPage";
import AccountDetailsPage from "./pages/AccountDetailsPage";
import AccountOrderPage from "./pages/AccountOrdersPage";
import MyAddressessPage from "./pages/MyAddressessPage";
import TrackOrderPage from "./pages/TrackOrderPage";


reverseGuardedRoutes([
  // login routes
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
]);

// i will change it to guardedRoutes
publicRoutes([
  {
    path: URLS.account.dashboard,
    component: AccountDashboardPage,
  },
  {
    path: URLS.account.orders,
    component: AccountOrderPage,
  },
  {
    path: URLS.account.trackOrder,
    component: TrackOrderPage,
  },
  {
    path: URLS.account.addresses,
    component: MyAddressessPage,
  },
  {
    path: URLS.account.details,
    component: AccountDetailsPage,
  },
]);
