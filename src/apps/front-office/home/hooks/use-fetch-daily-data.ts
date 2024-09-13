/* eslint-disable unused-imports/no-unused-vars */
import { useEffect } from "react";
import dailyBestSellsAtom from "../atoms/daily-best-sells.atom";
import { useGetDailyBestSellsBanner } from "../pages/HomePage/hooks/use-get-daily-best-sells-banner";

export default function useFetchDailyBannerData() {
  const data = dailyBestSellsAtom.use("products");
  const loading = dailyBestSellsAtom.use("loading");
  const error = dailyBestSellsAtom.use("error");

  const {
    loading: loadingBanner,
    error: errorBanner,
    banner,
  } = useGetDailyBestSellsBanner();

  console.log("BANNER", banner);

  useEffect(() => {
    const fetchData = async () => {
      dailyBestSellsAtom.change("loading", true);

      try {
        // const products = await getProducts();

        // dailyBestSellsAtom.setData({
        //   products,
        //   banner: {
        //     imageUrl: banner?.image[0].url,
        //     text: banner?.title,
        //   },
        // });

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
