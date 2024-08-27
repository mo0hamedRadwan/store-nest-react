import URLS from "apps/front-office/utils/urls";
import img1 from "assets/images/thumbnail/thumbnail-1.jpg";
import img2 from "assets/images/thumbnail/thumbnail-2.jpg";
import img3 from "assets/images/thumbnail/thumbnail-3.jpg";

export const MiddleHeaderSelectPlacholder = "All Categories";
export const MiddleHeaderInputPlacholder = "Search for items";

export const middleHeaderActions = [
  { name: "compare", href: URLS.compare, iconName: "git-compare" },
  { name: "wishlist", href: URLS.wishlist, iconName: "heart" },
  { name: "cart", href: URLS.cart, iconName: "cart" },
  { name: "myAccount", href: URLS.account, iconName: "user" },
];

export const navbarIcons = [
  { icon: "cart", link: URLS.cart },
  { icon: "heart", link: URLS.wishlist },
];

// Navigation Menu

export const websiteInfo = [
  { name: "location", link: "/", icon: "location-plus" },
  { name: "Login in / Sign up", link: URLS.auth.login, icon: "user" },
  { name: "(+01)-2345-6789", link: "/", icon: "phone" },
];

export const socialMediaLinks = [
  { name: "facebook", link: "https://www.facebook.com" },
  { name: "twitter", link: "https://www.twitter.com" },
  { name: "instagram", link: "https://www.instagram.com" },
  { name: "pinterest", link: "https://www.pinterest.com" },
  { name: "youtube", link: "https://www.youtube.com" },
];

// Account menu
export const accountMenu = [
  { name: "My Account", link: URLS.account },
  { name: "Addresses", link: URLS.addresses },
  { name: "Orders", link: URLS.orders },
  { name: "Wishlist", link: URLS.wishlist },
  { name: "Settings", link: URLS.settings },
  { name: "Logout", link: URLS.home }, // logout action and navigate to home
];

// Cart menu
export const cartMenu = [
  { img: img1, title: "item 1", amount: 1, price: 100 },
  { img: img2, title: "item 2", amount: 1, price: 200 },
  { img: img3, title: "item 3", amount: 1, price: 400 },
];
