import { atom } from "@mongez/react-atom";
import { getCategories } from "apps/front-office/home/services/home-service";
import { ProductCategory } from "apps/front-office/utils/types";

type CategoriesAtomDataType = {
  isLoading: boolean;
  originalCategories: ProductCategory[];
  categories: ProductCategory[];
  isError: string;
  searchTerm: string;
};

type CategoriesActionsType = {
  setCategories: () => void;
  getCategories: () => CategoriesAtomDataType;
  setLoading: (isLoading: boolean) => void;
  setError: (message: string) => void;
  filter: (searchTerm: string) => void;
};

const categoriesAtom = atom<CategoriesAtomDataType, CategoriesActionsType>({
  key: "categories",
  default: {
    isLoading: false,
    originalCategories: [],
    categories: [],
    isError: "",
  },
  actions: {
    setCategories: () => {
      // Fetch categories from server or API and return them here
      // categoriesAtom.merge({
      //   isLoading: true,
      // });
      categoriesAtom.change("isLoading", true);
      getCategories()
        .then(data => {
          const categories = data.data.categories;
          // console.log("Categories");
          // console.log(data);
          // console.log(categories);
          categoriesAtom.merge({
            isLoading: false,
            originalCategories: categories,
            categories,
            isError: "",
          });
        })
        .catch(err => {
          console.error(err);
          categoriesAtom.merge({
            isLoading: false,
            isError: err.message,
          });
        });
    },
    getCategories: () => {
      return categoriesAtom.use("originalCategories");
    },
    filter: searchTerm => {
      const filtered = categoriesAtom.value.originalCategories.filter(
        category =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      // categoriesAtom.change("categories", filtered);
      categoriesAtom.merge({
        categories: filtered,
        searchTerm,
      });
    },
  },
});

export default categoriesAtom;
