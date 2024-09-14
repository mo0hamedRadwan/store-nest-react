import URLS from "../../utils/urls";

export const accountItems = [
  { name: "dashboard", icon: "bxs-dashboard", link: URLS.account.dashboard },
  { name: "orders", icon: "bx-shopping-bag", link: URLS.account.orders },
  { name: "trackYourOrder", icon: "bx-cart", link: URLS.account.trackOrder },
  { name: "myAddress", icon: "bx-map", link: URLS.account.addresses },
  { name: "accountDetails", icon: "bx-user", link: URLS.account.details },
  { name: "logout", icon: "bx-log-in", link: URLS.account.logout },
];
