import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { getCurrentLocaleCode } from "@mongez/localization";
import { refresh } from "@mongez/react-router";
import { AxiosResponse } from "axios";
import user from "app/account/user";
import { apiBaseUrl, apiClient } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl,
  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["client-id"] = apiClient;
  headers["locale"] = getCurrentLocaleCode();
});

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data.data) {
    response.data = response.data.data;
  }

  if (response.data.user) {
    user.login(response.data.user);
  }
});

endpointEvents.onError(response => {
  if (response.data?.data) {
    response.data = response.data.data;
  }

  if (response.status === 401) {
    user.logout();
    refresh();
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
