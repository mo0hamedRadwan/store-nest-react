import { trans } from "@mongez/localization";
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
          trans("allCategories"),
          ...filteredCategories.map(category => category.name),
        ].map((option, index) => (
          <li
            key={index}
            onClick={handleSelectCategory}
            className="p-2 hover:bg-primary hover:text-white rounded">
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}
