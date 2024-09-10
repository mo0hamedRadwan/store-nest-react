import { atom } from "@mongez/react-atom";
import { GenericObject } from "@mongez/reinforcements";
import { Product } from "apps/front-office/utils/types";

export type TabCategory = {
  id: number;
  name: string;
  products: Product[];
};

type PopularProductsAtomOptions = {
  activeTab: number;
  tabs: TabCategory[];
  products: Product[];
  activeProducts: Product[];
};

const collectTabsData = (products: Product[]): TabCategory[] => {
  const categories: GenericObject<TabCategory> = {};
  for (const product of products) {
    const categoryId = product.category.id;
    const categoryName = product.category.name ?? "";

    if (!categories[categoryId]) {
      categories[categoryId] = {
        id: categoryId,
        name: categoryName,
        products: [],
      };
    }

    categories[categoryId].products.push(product);
  }
  return Object.values(categories);
};

export const popularProductsAtom = atom<PopularProductsAtomOptions>({
  key: "popularProducts",
  beforeUpdate(data) {
    if (data.tabs.length === 0) {
      data.tabs = collectTabsData(data.products);
    }

    if (data.activeTab === 0) {
      data.activeProducts = data.products;
    } else {
      data.activeProducts =
        data.tabs.find(tab => tab.id === data.activeTab)?.products ?? [];
    }

    return data;
  },
  default: {
    activeTab: 0,
    tabs: [],
    products: [],
    activeProducts: [],
  },
});
