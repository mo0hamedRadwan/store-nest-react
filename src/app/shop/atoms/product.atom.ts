"use client";

import { atom } from "@mongez/react-atom";
import { Product } from "app/shop/utils";

export const productAtom = atom<Product>({
  key: "product",
  default: {},
});
