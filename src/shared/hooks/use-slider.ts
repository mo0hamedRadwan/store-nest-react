import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getHome } from "src/apps/front-office/home/services/home-service";
import { Banner } from "src/apps/front-office/utils/types";

export const useSlider = () => {
  const [sliderData, setSliderData] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    // setIsLoading(true);
    getHome()
      .then(response => {
        console.log(response.data.rows[0].columns[0].module.slider);
        const sliderBanners =
          response.data.rows[0].columns[0].module.slider?.banners;
        // const processedData = sliderBanners?.map(banner => ({
        //   id: banner.id,
        //   image: banner.image[0].url || "",
        // }));
        setSliderData(sliderBanners!);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return { sliderData, isLoading, error };
};
