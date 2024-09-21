import { atom } from "@mongez/react-atom";
//Cart types will handel when call api, now just for testing use default type atom
export const cartAtom = atom({
  key: "cart",
  default: {
    items: [],
  },
});
