import { getFeaturedCategoryData } from "apps/front-office/home/services/home-service";
import { SliderData } from "apps/front-office/utils/types";
import { useEffect, useState } from "react";

export function useFeaturedCategories() {
  const [sliderData, setSliderData] = useState<SliderData>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mockData: SliderData = {
      categories: [
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
        {
          id: 2,
          name: [
            {
              localeCode: "en",
              value: "Organic Kiwi",
            },
          ],
          totalProducts: 15,
          isActive: false,
          slug: "",
          products: [],
        },
      ],
      sectionTitle: {
        userId: 0,
        id: 0,
        title: "Featured Categories",
        completed: true,
      },
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getFeaturedCategoryData();
        setSliderData({
          categories: result.categories,
          sectionTitle: {
            userId: result.sectionTitle.userId,
            title: result.sectionTitle.value,
            id: result.sectionTitle.id,
            completed: result.sectionTitle.completed,
          },
        });
      } catch (error) {
        console.error(
          "Failed to fetch featured category data, using mock data",
          error,
        );
        setError(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
        setSliderData(mockData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sliderData, isLoading, error };
}
