export type Category = {
  id: number;
  name: string;
  image?: {
    url: string;
  };
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  slug?: string;
};
