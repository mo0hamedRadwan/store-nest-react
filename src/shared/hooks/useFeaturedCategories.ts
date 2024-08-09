import { getFeaturedCategoryData } from "apps/front-office/home/services/home-service";
import { SliderData } from "apps/front-office/utils/types";
import { useEffect, useState } from "react";

export function useFeaturedCategories() {
  const [sliderData, setSliderData] = useState<SliderData>({
    categories: [],
    sectionTitle: {
      localeCode: "",
      value: "",
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mockData: SliderData = {
      categories: [
        {
          id: 1,
          name: "Organic Kiwi",
          items: 28,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 2,
          name: "Organic Kiwi",
          items: 15,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 3,
          name: "Organic Kiwi",
          items: 30,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 4,
          name: "Organic Kiwi",
          items: 28,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 5,
          name: "Organic Kiwi",
          items: 15,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 6,
          name: "Organic Kiwi",
          items: 30,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 7,
          name: "Organic Kiwi",
          items: 28,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 8,
          name: "Organic Kiwi",
          items: 15,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 9,
          name: "Organic Kiwi",
          items: 30,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 10,
          name: "Organic Kiwi",
          items: 28,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 11,
          name: "Organic Kiwi",
          items: 15,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 12,
          name: "Organic Kiwi",
          items: 30,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 13,
          name: "Organic Kiwi",
          items: 28,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 14,
          name: "Organic Kiwi",
          items: 15,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
        {
          id: 15,
          name: "Organic Kiwi",
          items: 30,
          imgSrc: "/images/featured-categories/kiwi.png",
        },
      ],
      sectionTitle: {
        localeCode: "",
        value: "Featured Categories",
      },
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getFeaturedCategoryData();
        // console.log(JSON.stringify(result));
        setSliderData(prevState => ({
          ...prevState,
          categories: result.categories,
          sectionTitle: {
            localeCode: result.sectionTitle.localeCode,
            value: result.sectionTitle.value,
          },
        }));
        // console.log(JSON.stringify(sliderData.categories));
      } catch (error) {
        console.error(
          "Failed to fetch featured category data, using mock data",
          error,
        );
        setError(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
        setSliderData(mockData); // Use mock data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sliderData, isLoading, error };
}
