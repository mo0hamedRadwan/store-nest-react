import { groupedTranslations, trans } from "@mongez/localization";
import bannersTranslation from "shared/localization/banners.json";
import mainTranslation from "shared/localization/index.json";
import productsTranslation from "shared/localization/products.json";
import sectionsTranslation from "shared/localization/sections.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here
  ...productsTranslation,
  ...sectionsTranslation,
  ...bannersTranslation,
});
