import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";

export const bottomHeaderNavbarItems = [
  { label: "home", link: URLS.home },
  { label: "aboutUs", link: URLS.pages.aboutUs },
  { label: "shop", link: URLS.shop.list },
  { label: "venders", link: URLS.venders },
  { label: "megaMenu", link: "/" },
  { label: "blog", link: "/blogLink" },
  { label: "contact", link: URLS.contactUs },
];

// Mega Menu
export const megaDropMenu = [
  {
    title: `${trans("fruit")} ${trans("and")} ${trans("vegetables")}`,
    items: [
      { name: "item-1", link: "/item-1" },
      { name: "item-1", link: "/item-1" },
      { name: "item-1", link: "/item-1" },
      { name: "item-1", link: "/item-1" },
      { name: "item-1", link: "/item-1" },
      { name: "item-1", link: "/item-1" },
    ],
  },
  {
    title: `${trans("breakfast")}${trans("and")} ${trans("dairy")}`,
    items: [
      { name: "item-2", link: "/item-2" },
      { name: "item-2", link: "/item-2" },
      { name: "item-2", link: "/item-2" },
      { name: "item-2", link: "/item-2" },
      { name: "item-2", link: "/item-2" },
      { name: "item-2", link: "/item-2" },
    ],
  },
  {
    title: `${trans("meat")}${trans("and")}${trans("seafood")}`,
    items: [
      { name: "item-3", link: "/item-3" },
      { name: "item-3", link: "/item-3" },
      { name: "item-3", link: "/item-3" },
      { name: "item-3", link: "/item-3" },
      { name: "item-3", link: "/item-3" },
      { name: "item-3", link: "/item-3" },
    ],
  },
];
