import { useState } from "react";
import categoriesAtom from "../../../atoms/categoriesAtom";

type CategoryMenuPropsType = {
  setSelectedCategory: (category: string) => void;
  setShowCategoryMenu: (show: boolean) => void;
};

export default function CategoryMenu({
  setSelectedCategory,
  setShowCategoryMenu,
}: CategoryMenuPropsType) {
  const [searchInputCategory, setSearchInputCategory] = useState("");
  const filteredCategories = categoriesAtom.use("categories");

  const handleInputCategoryChange = e => {
    const value = e.target.value;
    setSearchInputCategory(value);
    categoriesAtom.filter(value);
  };

  const handleSelectCategory = e => {
    setSelectedCategory(e.target.textContent);
    setShowCategoryMenu(false);
  };

  return (
    <>
      <ul className="absolute top-10 w-full h-60 p-2 overflow-y-scroll bg-white z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <input
          type="text"
          placeholder="Search Category..."
          className="w-full bg-slate-100 p-1 mb-2 rounded outline-none"
          value={searchInputCategory}
          onChange={handleInputCategoryChange}
        />
        {[
          "All Categories",
          ...filteredCategories.map(category => category.name),
        ].map(option => (
          <li
            key={option}
            className="py-1 px-2 hover:bg-primary-default hover:text-white duration-200 rounded cursor-pointer"
            onClick={handleSelectCategory}>
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}
