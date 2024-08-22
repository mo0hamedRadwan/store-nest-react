import { useEffect } from "react";
import dailyBestSellsAtom from "../atoms/daily-best-sells.atom";
import {
  getDailyBestSellsBannerDataSection,
  getDailyBestSellsDataSection,
} from "../services/home-service";

export default function useFetchDailyBannerData() {
  const data = dailyBestSellsAtom.use("products");
  const loading = dailyBestSellsAtom.use("loading");
  const error = dailyBestSellsAtom.use("error");

  const getBanner = async () => {
    return await getDailyBestSellsBannerDataSection();
  };

  const getProducts = async () => {
    return await getDailyBestSellsDataSection();
  };

  useEffect(() => {
    const fetchData = async () => {
      dailyBestSellsAtom.change("loading", true);

      try {
        const bannerData = await getBanner();
        const products = await getProducts();

        dailyBestSellsAtom.setData({
          products,
          banner: {
            imageUrl: bannerData.banner.imageUrl,
            text: bannerData.banner.title,
          },
        });

        dailyBestSellsAtom.change("loading", false);
      } catch (error) {
        dailyBestSellsAtom.change("error", error);
        dailyBestSellsAtom.change("loading", false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

/**
 * API Call
 * rows -> 5th [4] -> columns -> module -> banner -> [title, image -> url]
 * rows -> 4th [3] -> columns -> module -> products -> [id, name, price, image -> url, category -> name]
 * rows -> 3th [2] -> columns -> module -> categories -> [ name, products ]
 * featured -> top rated, recently added, top selling
 */
