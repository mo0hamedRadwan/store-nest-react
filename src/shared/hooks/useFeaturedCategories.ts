import { Category } from "apps/front-office/utils/types";
import { useEffect, useState } from "react";
import { getCategories } from "src/apps/front-office/home/services/home-service";

export function useFeaturedCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const mockData: SliderData = {
    //   categories: [
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //     {
    //       id: 2,
    //       name: [
    //         {
    //           localeCode: "en",
    //           value: "Organic Kiwi",
    //         },
    //       ],
    //       totalProducts: 15,
    //       isActive: false,
    //       slug: "",
    //       products: [],
    //     },
    //   ],
    //   sectionTitle: {
    //     userId: 0,
    //     id: 0,
    //     title: "Featured Categories",
    //     completed: true,
    //   },
    // };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      getCategories()
        .then(response => {
          console.log(response);
          setCategories(response.data.categories);
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setError("Failed to fetch featured category data, using mock data");
        });
    };

    fetchData();
  }, []);

  return { categories, isLoading, error };
}
