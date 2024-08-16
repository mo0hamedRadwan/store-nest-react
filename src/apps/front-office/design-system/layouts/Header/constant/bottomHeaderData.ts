import URLS from "apps/front-office/utils/urls";

export const bottomHeaderNavbarItems = [
  { label: "home", link: URLS.home },
  { label: "about", link: URLS.pages.aboutUs },
  { label: "shop", link: URLS.shop },
  { label: "venders", link: URLS.venders },
  { label: "megaMenu", link: "/" },
  { label: "blog", link: "/blogLink" },
  { label: "contact", link: URLS.contactUs },
];

// Mega Menu
export const megaDropMenu = [
  {
    title: "Fruit & Vegetables",
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
    title: "Breakfast & Dairy",
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
    title: "Meat & Seafood",
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
