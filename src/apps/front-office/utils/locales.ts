import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  home: {
    en: "Home Page",
    ar: "الصفحة الرئيسية",
  },
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  PopularProducts: {
    en: "Popular Products",
    ar: "المنتجات الشائعة",
  },
  AllProducts: {
    en: "all products",
    ar: "جميع المنتجات ",
  },
  new: {
    en: "New",
    ar: "جديد",
  },
  addToCart: {
    en: "Add",
    ar: "اضافة للسلة",
  },
});
