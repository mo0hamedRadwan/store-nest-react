export type Image = {
  hash: string;
  url: string;
  name: string;
};

export type ProductCategory = {
  id: number;
  name: string;
  img?: string;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  image: Image;
  price: number;
  totalPrice: number;
  salePrice?: number;
  category: ProductCategory;
  isFavorite: boolean;
  rating: number;
  reviews: number;
  totalReviews: number;
  maxAmountPerOrder?: number;
  path: string;
  size: number;
  url: string;
  width: number;
  slug?: string;
};

export type CreatedAt = {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
};

export type Discount = {
  percentage: number;
  amount: number;
};
