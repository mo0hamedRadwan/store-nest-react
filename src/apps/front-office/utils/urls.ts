// append urls here, DO NOT remove this line

import { Category, Product } from "../shop/utils/types";

const URLS = {
  informativePages: "/informative-pages",
  aboutUS: "/about-us",
  pagesInfo: "/pages-info",
  catalog: "/catalog",
  home: "/",
  compare: "/compare",
  cart: "/cart",
  checkout: "/checkout",
  account: "/account",
  wishlist: "/wishlist",
  addresses: "/addresses",
  orders: "/orders",
  venders: "/venders",
  notFound: "/404",
  shop: {
    list: "/products",
    viewCategoryRoute: "/category/:id",
    viewCategory: (category: Category) => `/category/${category.id}`,
    viewProductRoute: "products/:id",
    viewProduct: (product: Product) => `/produucts/${product.id}`,
  },
  product: {
    root: "/product",
    viewRoute: "/product/:id/:slug",
    view: (product: Product) => `/product/${product.id}/${product.slug}`,
  },
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    login: "/login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
};

export default URLS;
