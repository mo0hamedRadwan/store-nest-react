import { PRODUCT_STATUS } from "shared/constants";
import { IProductContent } from "./IProductContent";

export interface IProduct {
  images: {
    foreground?: string;
    background?: string;
  };

  status?: PRODUCT_STATUS;

  body: IProductContent;
}
