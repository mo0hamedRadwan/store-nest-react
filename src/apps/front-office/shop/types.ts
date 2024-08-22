// Define the shape of a category
export interface Category {
  id: number;
  name: { localeCode: string; value: string }[];
  totalProducts: number;
}

// Props for the CategoryItem component
export interface CategoryItemProps {
  name: { localeCode: string; value: string }[];
  img: string;
  totalProducts: number;
}
