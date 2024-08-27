import { currentLocaleCode } from "apps/front-office/utils/helpers";
import { useEffect, useState } from "react";
import { getDailyBestSellsDataSection } from "../services/home-service";

export default function useFetchDailyData() {
  const [data, setData] = useState({
    categories: [],
    products: [],
    banner: {
      imageUrl: "",
      title: "",
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDailyBestSellsDataSection(currentLocaleCode())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
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
