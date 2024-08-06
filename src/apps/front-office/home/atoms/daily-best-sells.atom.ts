import { atom } from "@mongez/react-atom";

import { IProduct } from "shared/contracts/IProduct";

interface IDailyBestSells {
  status: {
    list: string[];
    active: string;
  };

  banner: {
    imageUrl: string;
    text: string;
  };

  products: IProduct[];
  activeProducts: IProduct[];
}

const dailyBestSellsAtom = atom<IDailyBestSells>({
  key: "dailyBestSells",
  default: {
    status: {
      list: ["topRated", "recentlyAdded", "topSelling"],
      active: "topRated",
    },
    banner: {
      imageUrl: "/public/images/daily-best-products/banner-4.png",
      text: "dailyBestSellsBannerText",
    },
    products: [],
    activeProducts: [],
  },

  beforeUpdate(data) {
    if (data.activeProducts.length === 0) {
      data.activeProducts = data.products;
    }

    return data;
  },

  actions: {
    setData: (data: IDailyBestSells) => {
      dailyBestSellsAtom.update(data);
    },

    setStatus: (status: string[]) => {
      const _status = dailyBestSellsAtom.get("status");
      dailyBestSellsAtom.change("status", { ..._status, list: status });
    },

    setProducts: (products: IProduct[]) => {
      dailyBestSellsAtom.change("products", products);
    },

    filterProducts: (status: string) => {
      const _status = dailyBestSellsAtom.get("status");
      dailyBestSellsAtom.change("status", { ..._status, active: status });

      const products = dailyBestSellsAtom.get("products");

      dailyBestSellsAtom.change(
        "products",
        products.filter(product => product.status === status),
      );
    },
  },
});

export default dailyBestSellsAtom;
