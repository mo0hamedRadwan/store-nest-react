export interface IProductContent {
  name: string;
  brandName: string;

  rate?: number;

  price: number;
  discount?: number;

  total: number;
  sold?: number;

  buttonFullWidth?: boolean;
}
