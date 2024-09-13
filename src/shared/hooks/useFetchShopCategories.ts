import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { Category } from "src/apps/front-office/utils/types";
import { getCategory } from "../../apps/front-office/shop/services/shop-service";

export default function useFetchShopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    getCategory()
      .then(response => {
        const categories = response?.data;
        setCategories(categories);
      })
      .catch(error => {
        setError(error.message || "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { categories, isLoading, error };
}
