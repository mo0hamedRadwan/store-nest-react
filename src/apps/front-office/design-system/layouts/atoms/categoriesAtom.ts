import { atom } from "@mongez/react-atom";
import { getCategories } from "apps/front-office/home/services/home-service";
import { Category } from "../types";

type categoriesActionsType = {
  setCategories: () => void;
  getCategories: () => Category[];
};

const categoriesAtom = atom<Category[], categoriesActionsType>({
  key: "categories",
  default: [] as Category[],
  actions: {
    setCategories: () => {
      // Fetch categories from server or API and return them here
      getCategories()
        .then(data => {
          console.log("Categories");
          categoriesAtom.update(data as Category[]);
        })
        .catch(err => console.error(err));
    },
    getCategories: () => {
      return categoriesAtom.useValue();
    },
  },
});

export default categoriesAtom;
