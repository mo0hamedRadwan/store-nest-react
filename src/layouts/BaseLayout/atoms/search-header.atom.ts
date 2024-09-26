import { atom } from "@mongez/react-atom";

export const searchHeaderAtom = atom<{
  category?: number;
  q: string;
}>({
  key: "searchHeader",
  default: {
    category: undefined,
    q: "",
  },
});
