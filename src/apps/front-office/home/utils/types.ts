import { Category, Product } from "app/shop/utils/types";
import { Banner } from "../../utils/types";

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

export type Module = {
  id: number;
  isActive: boolean;
  type: string;
  name: string;
  title: string;
  shortDescription: string;
  categories: Category[];
  products: Product[];
  slider?: Slider;
  banner?: Banner;
};

export type Slider = {
  banners: Banner[];
  id: string;
  isActive: boolean;
  name: string;
  title: string;
};
