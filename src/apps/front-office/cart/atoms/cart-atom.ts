import { atom } from "@mongez/react-atom";
import { Cart } from "../../utils/types";
export const cartAtom = atom<Cart>({
  key: "cart",
  default: {
    items: [],
  },
});
