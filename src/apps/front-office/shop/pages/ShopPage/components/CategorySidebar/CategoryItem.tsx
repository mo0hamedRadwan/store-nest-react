// Import the correct types

import { queryString } from "@mongez/react-router";
import { shopAtom } from "src/apps/front-office/shop/atoms/shopAtom";
import { Category } from "src/apps/front-office/utils/types";

type CategoryItemProps = {
  category: Category;
};

export default function CategoryItem({ category }: CategoryItemProps) {
  const filterByCategory = () => {
    const query = queryString.toQueryString({
      category: category.name,
    });
    queryString.update(query);
    shopAtom.getProducts({
      category: category.id,
    });
  };
  return (
    <li
      onClick={() => filterByCategory()}
      className="flex items-center border border-solid border-[#F2F3F4] rounded mb-3 px-[18px] py-2 justify-between  text-mainColor leading-8 cursor-pointer hover:text-primary hover:border-light hover:shadow-md transition-all delay-200">
      <div className="flex items-center p-0  text-mainColor hover:text-primary text-sm min-w-[30px] mr-3 gap-4">
        <img
          src={category.image?.url}
          alt={category.name}
          className="w-[30px] h-[30px]"
        />
        <span className="text-sm font-medium">{category.name}</span>
      </div>
    </li>
  );
}
