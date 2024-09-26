import { publicRoutes } from "app/utils/router";
import { URLS } from "shared/utils";
import NotFoundPage from "./pages/NotFoundPage";

publicRoutes([
  {
    path: URLS.notFound,
    component: NotFoundPage,
  },
]);
