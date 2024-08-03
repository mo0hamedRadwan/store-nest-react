import { useState, useEffect } from 'react';
import { apiAuthToken, apiBaseUrl, apiClient } from 'shared/flags';
type SlideData = {
  id: number;
  image: string;
};

export const useSlider = () => {
  const [sliderData, setSliderData] = useState<SlideData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(apiBaseUrl, {
          headers: {
            'client-id': apiClient,
            'Authorization': `Bearer ${apiAuthToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const sliderBanners = data.rows[0].columns[0].module.slider.banners;
        const processedData = sliderBanners.map(banner => ({
          id: banner.id,
          image: banner.image.find(img => img.localeCode === 'en')?.value.url || ''
        }));
        setSliderData(processedData);
      } catch (error) {
        console.error('Error fetching slider data:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  return { sliderData, isLoading, error };
};