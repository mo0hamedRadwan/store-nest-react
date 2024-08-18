// I created a new file "type.ts" because I made a change in Types
export type LocaleValue = {
  localeCode: string;
  value: string;
};

export type Category = {
  id: number;
  name: LocaleValue[];
  products?: Product[];
};

export type Module = {
  id: number;
  isActive: boolean;
  type: string;
  name: string;
  title: LocaleValue[];
  shortDescription: LocaleValue[];
  categories: Category[];
  products: Product[];
};

export type Column = {
  id: number;
  isActive: boolean;
  module: Module;
  style: {
    size: {
      default: string;
    };
  };
};
export type Row = {
  columns: Column[];
};

export type Meta = {
  appendAppName: boolean;
};
export type Image = {
  extension: string;
  hash: string;
  height: number;
  id: string;
  mimeType: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
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

export type Product = {
  id: number;
  category: Category;
  createdAt: CreatedAt;
  description: LocaleValue[];
  discount: Discount;
  hasDiscount: boolean;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inStock: boolean;
  inWishlist: boolean;
  isActive: boolean;
  isLowStock: boolean;
  name: LocaleValue[];
  price: number;
  purchase: {
    minQuantity: number;
  };
  salePrice: number;
  shortDescription: string;
  slug: string;
  sortOrder: number;
  type: string;
  rating: number;
};

export type ProductCategory = {
  id: number;
  name: string;
};
