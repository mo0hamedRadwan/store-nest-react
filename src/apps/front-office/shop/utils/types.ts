import { Image } from "../../utils/types";

export type Discount = {
  percentage: number;
  amount: number;
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
  products?: Product[];
  image?: Image;
};

export type Product = {
  id: number;
  category: Category;
  description: string;
  discount: Discount;
  hasDiscount: boolean;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inStock: boolean;
  stock?: { available: number };
  inWishlist: boolean;
  isActive: boolean;
  isLowStock: boolean;
  name: string;
  price: number;
  purchase?: {
    minQuantity: number;
  };
  salePrice?: number;
  shortDescription: string;
  slug: string;
  sortOrder: number;
  type: string;
  rating: number;
};
