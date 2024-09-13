import { trans } from "@mongez/localization";

export default function SearchInput() {
  return (
    <div className="relative mb-9">
      <input
        className="border border-solid border-[#ececec] py-2 w-full pl-4 text-[16px] pr-10 rounded-[10px] h-16 outline-none focus:border-shopCategoryColor "
        type="text"
        name="Search"
        placeholder={trans("search")}
      />
      <i className="bx bx-search text-xl absolute left-[80%] top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>
  );
}
