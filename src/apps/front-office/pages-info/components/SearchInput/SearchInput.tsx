import { trans } from "@mongez/localization";

export default function SearchInput() {
  return (
    <div className="relative mb-9">
      <input
        className="border border-solid border-[#ececec] py-2 w-full pl-4 text-[16px] pr-16 rounded-[10px] h-16 outline-none focus:border-shopCategoryColor font-lato"
        type="text"
        name="Search"
        placeholder={trans("search")}
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[23px] h-full px-6 bg-transparent text-[#242424] border-none rounded-[10px] hover:bg-priceNowColor hover:text-white transition-all duration-300 ease-in-out"
        type="submit">
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}
