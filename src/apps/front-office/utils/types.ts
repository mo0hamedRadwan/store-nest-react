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
  date?: string;
  time?: string;
};

export interface UpdatedAt {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
  date: string;
}

export interface CreatedBy {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
}

export interface UpdatedBy {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
}
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
  shortDescription: LocaleValue[];
  slug: string;
  sortOrder: number;
  type: string;
  rating: number;
};

export type ProductCategory = {
  id: number;
  name: string;
};

export interface Category3 {
  id: number;
  isActive: boolean;
  name: LocaleValue[];
  image?: Image;
  slug: string;
}

export type Product1 = {
  id: number;
  category: Category3;
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
  shortDescription: LocaleValue[];
  slug: string;
  sortOrder: number;
  type: string;
  rating: number;
};
export interface Category2 {
  id: number;
  isActive: boolean;
  name: LocaleValue[];
  image?: Image;
  slug: string;
  totalProducts: number;
  products: Product1[];
}

export interface SliderData {
  categories: Category2[];
  sectionTitle: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}
