import { atom } from "@mongez/react-atom";
import { Product } from "../../shop/utils/types";

const only = ["top-selling", "recently-added", "top-rated"];

interface IDailyBestSells {
  banner: {
    imageUrl: string;
    text: string;
  };

  products: Product[];
  activeProducts: Product[];
}

const dailyBestSellsAtom = atom<
  IDailyBestSells & {
    status: {
      list: string[];
      active: string;
    };
    loading: boolean;
    error: any;
  }
>({
  key: "dailyBestSells",
  default: {
    status: {
      list: [],
      active: "",
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
      /**
       * @description Gather the status (Categories) from the coming products
       */
      const _status = data.products.reduce((acc: any, product) => {
        if (
          !acc.includes(product.category.slug!) &&
          only.includes(product.category.slug!)
        ) {
          acc.push({
            value: product.category.name,
            slug: product.category.slug!,
          });
        }

        return acc;
      }, []);

      /**
       * @description Gather only products with the status (Categories) that are in the _status/only array
       */
      data.products = data.products.filter(product => {
        return only.includes(product.category.slug!);
      });

      /**
       * @description Update the atom with the new data
       */
      dailyBestSellsAtom.merge({
        ...data,
        status: {
          list: _status,
          active: _status[0],
        },
      });
    },

    filterProducts: (status: string) => {
      dailyBestSellsAtom.merge({
        status: {
          list: dailyBestSellsAtom.get("status").list,
          active: status,
        },
        activeProducts: dailyBestSellsAtom.get("products").filter(product => {
          return product.category.name === status;
        }),
      });
    },
  },
});

export default dailyBestSellsAtom;
