import { Link } from "@mongez/react-router";
import { useState } from "react";
import categoriesAtom from "../../atoms/categoriesAtom";

const BrowseCategoriesMenu = () => {
  const [openSeeMore, setOpenSeeMore] = useState(false);
  const categories = categoriesAtom.use("categories");

  console.log(categories);

  return (
    <div
      className={`absolute top-20 w-[500px] p-10 z-10 rounded-xl bg-white duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}>
      <div className="flex flex-col">
        <ul className="flex flex-row flex-wrap gap-5">
          {categories.map((category, index) => {
            if (index >= 10 && !openSeeMore) return undefined;
            return (
              <li
                key={index}
                className="w-[198px] h-[50px] flex items-center border border-slate-200 rounded-lg px-4 py-2  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <Link
                  to={`/category/${category.id}`}
                  className="flex items-center gap-x-4">
                  {category.image?.url && (
                    <img
                      src={category.image.url}
                      alt="category icon"
                      className="w-8 h-8"
                    />
                  )}
                  <h3 className="text-sm font-bold text-slate-600">
                    {category.name}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* {openSeeMore && (
          <ul className="flex flex-row flex-wrap gap-5 mt-5">
            {otherCategories.map((category, index) => (
              <li
                key={index}
                className="w-[198px] border border-slate-200 rounded-lg px-4 py-2">
                <Link to={category.link} className="flex items-center gap-x-4">
                  <img
                    src={category.icon}
                    alt="category icon"
                    className="w-8 h-8"
                  />
                  <h3 className="text-base font-bold text-slate-600">
                    {category.label}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        )} */}
        {categories.length > 10 && (
          <button
            className="mt-8 text-xl flex justify-center items-center gap-x-2"
            onClick={() => setOpenSeeMore(!openSeeMore)}>
            <span className="text-primary-default text-2xl">
              {openSeeMore ? (
                <i className="bx bx-minus-circle"></i>
              ) : (
                <i className="bx bx-plus-circle"></i>
              )}
            </span>
            <span>See {openSeeMore ? "less" : "more"}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BrowseCategoriesMenu;
