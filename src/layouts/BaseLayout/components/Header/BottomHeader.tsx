import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { changeLocaleCode, Link } from "@mongez/react-router";
import { Button } from "design-system/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "design-system/components/ui/select";
import { useState } from "react";
import { useWindowScrollPosition } from "shared/hooks";
import { isLTR, localeCodesList } from "shared/utils";
import { bottomHeaderNavbarItems } from "./constant/bottomHeaderData";
import BrowseCategoriesMenu from "./menu/BrowseCategoriesMenu";
import DropMegaMenu from "./menu/DropMegaMenu";

const BottomHeader = () => {
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const language = localeCodesList[getCurrentLocaleCode()].name;
  const windowScroll = useWindowScrollPosition();

  return (
    <div
      className={`container relative bg-white py-2 w-full hidden lg:flex justify-between items-center
        ${windowScroll >= 150 && "sticky top-0 z-50"}`}>
      <div className="flex justify-between items-center gap-x-8">
        <Button
          className="bg-primary hover:bg-main-700 active:bg-main-700 border-none outline-none focus-visible:ring-0 h-11"
          onClick={() => setOpenCategoriesMenu(!openCategoriesMenu)}>
          <i className="bx bx-category"></i>
          <span className="mx-2 text-sm">{`${trans("browse")} ${trans("allCategories")}`}</span>
          {openCategoriesMenu ? (
            <i className="bx bx-chevron-up"></i>
          ) : (
            <i className="bx bx-chevron-down"></i>
          )}
        </Button>
        {openCategoriesMenu && <BrowseCategoriesMenu />}
        <ul className="flex text-secondary text-xs font-bold items-center gap-x-6 xl:gap-x-8">
          <li className="text-base hover:text-primary cursor-pointer">
            <i className="bx bxs-hot text-primary"></i>
            <span className={`mx-2 ${isLTR() ? "xl:mr-5" : "xl-ml-5"}`}>
              {trans("deals")}
            </span>
          </li>
          {bottomHeaderNavbarItems.map(item => (
            <li
              key={item.label}
              className={`hover:text-primary cursor-pointer text-xs xl:text-base group ${activeNavItem === item.label ? "text-primary" : ""}`}>
              {item.label === "megaMenu" ? (
                <div className="">
                  <span>{trans(item.label)}</span>
                  <i className="bx bx-chevron-down"></i>
                  <DropMegaMenu />
                </div>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setActiveNavItem(item.label)}>
                  {trans(item.label)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Select onValueChange={value => changeLocaleCode(value)}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder={language}>{language}</SelectValue>
        </SelectTrigger>
        <SelectContent className="cursor-pointer w-[200px] outline-none">
          {Object.keys(localeCodesList).map(locale => (
            <SelectItem
              key={locale}
              value={locale}
              className="hover:bg-primary hover:text-white cursor-pointer">
              {localeCodesList[locale].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* <div className="flex justify-between items-center">
        <div className="hidden 2xl:flex items-center gap-x-3">
          <i className="bx bx-headphone text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-primary">
              1900 - 888
            </span>
            <span className="text-xs font-serif">24/7 Support Center</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BottomHeader;
