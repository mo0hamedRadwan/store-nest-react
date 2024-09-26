import { atom } from "@mongez/react-atom";
import { getCategories } from "app/shop/services";
import { type Category } from "app/shop/utils";

type CategoriesAtomAction = {
  load: () => void;
};

type CategoriesAtomData = {
  categories: Category[];
  state: "idle" | "loading" | "loaded";
};

export const categoriesAtom = atom<CategoriesAtomData, CategoriesAtomAction>({
  key: "categories",
  default: {
    categories: [],
    state: "idle",
  },
  actions: {
    load: () => {
      if (categoriesAtom.get("state") !== "idle") return;

      categoriesAtom.change("state", "loading");
      getCategories()
        .then(categories => {
          categoriesAtom.merge({
            categories,
            state: "loaded",
          });
        })
        .catch(error => {
          // TODO: Toast error
          console.log("Something went wrong", error);
        });
    },
  },
});
