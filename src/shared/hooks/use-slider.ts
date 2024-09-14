import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getHome } from "src/apps/front-office/home/services/home-service";

export const useSlider = () => {
  const [sliderData, setSliderData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    // setIsLoading(true);
    getHome()
      .then(response => {
        console.log(response);
        const banners = response.map(row => {
          console.log(row);
          return {
            id: row.columns,
            name: row.columns,
            isActive: row.columns,
            title: row.columns,
            description: row.columns,
            image: row.columns,
          };
        });
        setSliderData(banners);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return { sliderData, isLoading, error };
};
