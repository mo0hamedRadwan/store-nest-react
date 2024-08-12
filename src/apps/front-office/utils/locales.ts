import { groupedTranslations, trans } from "@mongez/localization";
import bannersTranslation from "shared/localization/banners.json";
import headerTranslation from "shared/localization/header.json";
import mainTranslation from "shared/localization/index.json";
import productsTranslation from "shared/localization/products.json";
import sectionsTranslation from "shared/localization/sections.json";
import shopTranslation from "shared/localization/shop.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  home: {
    en: "Home",
    ar: "الصفحة الرئيسية",
  },
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  popularProducts: {
    en: "Popular Products",
    ar: "المنتجات الشائعة",
  },
  allProducts: {
    en: "all products",
    ar: "جميع المنتجات ",
  },
  ...productsTranslation,
  ...sectionsTranslation,
  ...bannersTranslation,
  ...shopTranslation,
  ...headerTranslation,
});
