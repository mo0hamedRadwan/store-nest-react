import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { categoriesAtom } from "app/shop/atoms";
import { Category } from "app/shop/utils";
import { searchHeaderAtom } from "layouts/BaseLayout/atoms/search-header.atom";
import { useEffect, useState } from "react";
import { useClickOutside } from "shared/hooks";

export default function CategoryMenu() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const menuRef = useClickOutside(() => setShowCategoryMenu(false));
  const allCategories = categoriesAtom.use("categories");
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>(
    [],
  );

  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();

  categoriesAtom.load();

  useEffect(() => {
    if (allCategories.length === 0) return;

    setDisplayedCategories(allCategories);
  }, [allCategories]);

  const handleInputCategoryChange = e => {
    const value = e.target.value;
    const filteredCategories = allCategories.filter(category =>
      category.name.toLowerCase().includes(value.toLowerCase()),
    );

    setDisplayedCategories(filteredCategories);
  };

  const handleSelectCategory = (category: Category) => {
    const selectedCategory = category.id === 0 ? undefined : category;

    setSelectedCategory(selectedCategory);

    searchHeaderAtom.change("category", selectedCategory?.id);

    setShowCategoryMenu(false);
  };

  return (
    <>
      <div
        className="relative w-[190px] hidden xl:flex justify-center items-center"
        ref={menuRef}>
        <div
          className="w-full py-1 cursor-pointer text-center"
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          <span className="font-semibold">
            {selectedCategory?.name || trans("allCategories")}
          </span>
          <span className="ml-2">
            {showCategoryMenu ? (
              <i className="bx bx-chevron-up"></i>
            ) : (
              <i className="bx bx-chevron-down"></i>
            )}
          </span>
        </div>
        {showCategoryMenu && (
          <ul className="absolute top-10 w-full h-60 p-2 overflow-y-scroll bg-white z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <input
              type="text"
              placeholder="Search Category..."
              className="w-full bg-slate-100 p-1 mb-2 rounded outline-none"
              defaultValue={queryString.get("q")}
              onChange={handleInputCategoryChange}
            />
            {[
              {
                id: 0,
                name: trans("allCategories"),
              },
              ...displayedCategories,
            ].map((option, index) => (
              <li
                key={index}
                role="button"
                onClick={() => handleSelectCategory(option)}
                className="p-2 hover:bg-primary hover:text-white rounded cursor-pointer">
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
