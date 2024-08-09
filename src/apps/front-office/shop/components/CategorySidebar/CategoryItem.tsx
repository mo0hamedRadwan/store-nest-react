// Import the correct types
import { CategoryItemProps } from "../../types";

export default function CategoryItem({
  img,
  name,
  totalProducts,
}: CategoryItemProps) {
  // Function to get the name based on localeCode, defaulting to 'en' if available
  const getNameByLocale = (
    names: { localeCode: string; value: string }[],
    locale: string = "en",
  ) => {
    const foundName = names.find(n => n.localeCode === locale);
    return foundName ? foundName.value : names[0]?.value;
  };

  const itemName = getNameByLocale(name);

  return (
    <li className="flex items-center border border-solid border-[##F2F3F4] rounded mb-3 px-2 py-4 justify-between font-bold text-mainColor leading-8 cursor-pointer hover:border-[#BCE3C9] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.2)] transition-all delay-200">
      <a
        href="/"
        className="flex items-center p-0 leading-[1.5] text-mainColor text-[14px] max-w-[30px] mr-3 gap-4">
        <img src={img} alt={itemName} />
        {itemName}
      </a>
      <span className="w-[24px] h-[24px] rounded-2xl bg-[#BCE3C9] text-[13px] text-mainColor flex items-center justify-center">
        {totalProducts}
      </span>
    </li>
  );
}
