import { atom } from "@mongez/react-atom";

export const shopDisplayModeAtom = atom<"grid" | "list">({
  key: "shopDisplayMode",
  default: "grid",
});
