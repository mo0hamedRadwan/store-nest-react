import { trans } from "@mongez/localization";
import {
  useClickOutside,
  useFilterProducts,
} from "apps/front-office/design-system/hooks";
import { isLTR } from "apps/front-office/utils/helpers";
import { useEffect, useState } from "react";
import categoriesAtom from "../../../atoms/categoriesAtom";
import CategoryMenu from "./CategoryMenu";
import SuggestProductsMenu from "./SuggestProductsMenu";

export default function SearchForm() {
  const [selectedCategory, setSelectedCategory] = useState(
    trans("allCategories"),
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >();
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showSuggestProductsMenu, setShowSuggestProductsMenu] = useState(false);
  const [searchInputProduct, setSearchInputProduct] = useState("");
  const filteredCategories = categoriesAtom.use("categories");

  const {
    // isLoading: productsLoading,
    // isError: productsError,
    filteredProducts,
  } = useFilterProducts(searchInputProduct, selectedCategoryId);

  const menuRef = useClickOutside(() => setShowCategoryMenu(false));
  const suggestProductsMenuRef = useClickOutside(() =>
    setShowSuggestProductsMenu(false),
  );

  const handleInputProductChange = e => {
    const value = e.target.value;
    setSearchInputProduct(value);
  };

  const handleSearch = e => {
    e.preventDefault();
    console.log("Search");
  };

  useEffect(() => {
    if (
      selectedCategory === trans("allCategories") ||
      filteredCategories.length === 0
    ) {
      setSelectedCategoryId(undefined);
      return;
    }

    const categoryId = filteredCategories.find(
      c => c.name.toLowerCase() === selectedCategory.toLowerCase(),
    )?.id;
    setSelectedCategoryId(categoryId?.toString());
  }, [selectedCategory, filteredCategories]);

  useEffect(() => {
    setShowSuggestProductsMenu(filteredProducts.length !== 0);
  }, [searchInputProduct, filteredProducts]);

  return (
    <form
      className="hidden lg:flex items-center border border-primary rounded-lg p-2"
      onSubmit={handleSearch}>
      <div
        className="relative w-[190px] hidden xl:flex justify-center items-center"
        ref={menuRef}>
        <div
          className="w-full py-1 cursor-pointer text-center"
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          <span className="font-semibold">{selectedCategory}</span>
          <span className="ml-2">
            {showCategoryMenu ? (
              <i className="bx bx-chevron-up"></i>
            ) : (
              <i className="bx bx-chevron-down"></i>
            )}
          </span>
        </div>
        {showCategoryMenu && (
          <CategoryMenu
            setSelectedCategory={setSelectedCategory}
            setShowCategoryMenu={setShowCategoryMenu}
          />
        )}
      </div>

      <hr className="hidden xl:block w-[1px] h-5 mr-3 bg-slate-300" />
      <div className="relative flex items-center" ref={suggestProductsMenuRef}>
        <input
          type="text"
          placeholder={trans("searchForProducts")}
          className="2xl:w-[600px] w-[400px] text-lg placeholder:text-slate-500 outline-none"
          value={searchInputProduct}
          onChange={handleInputProductChange}
        />
        <div
          className={`absolute ${isLTR() ? "right-4" : "left-4"} text-2xl text-slate-500`}>
          <i className="bx bx-search"></i>
        </div>
        {showSuggestProductsMenu && (
          <SuggestProductsMenu suggestProducts={filteredProducts} />
        )}
      </div>
    </form>
  );
}
