import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link, changeLocaleCode } from "@mongez/react-router";
import { SelectItem } from "@radix-ui/react-select";
import { localeCodesList } from "apps/front-office/utils/localization";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { offerNotification, topHeaderLinks } from "./constant/topHeaderData";

const TopHeader = () => {
  const language = localeCodesList[getCurrentLocaleCode()].name;
  return (
    <div className="container hidden md:flex md:justify-between items-center py-2 text-sm lg:bg-white lg:dark:bg-slate-900 md:bg-primary lg:text-black lg:dark:text-white md:text-white">
      <ul className="hidden lg:flex items-center">
        {topHeaderLinks.map((link, index) => (
          <li key={link.name} className="flex items-center">
            <Link
              to={link.href}
              className="text-slate-700 hover:text-slate-950 hover:dark:text-white">
              {trans(link.name)}
            </Link>
            {index !== topHeaderLinks.length - 1 && (
              <Separator orientation="vertical" className="h-2.5 mx-2.5" />
            )}
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex lg:w-auto md:w-full justify-center">
        <li>{trans(offerNotification)}</li>
        {/* <li>100% Secure delivery without contacting the courier</li> */}
        {/* <li>Supper Value Deals - Save more with coupons</li> */}
      </ul>
      <ul className="hidden lg:flex items-center gap-x-2">
        <li>
          <p>
            {trans("needHelp")} {trans("callUs")}:
            <span className="text-primary hover:text-primary-dark hover:font-bold">
              + 1800 900
            </span>
          </p>
        </li>
        <li>
          <Select onValueChange={value => changeLocaleCode(value)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder={language}>{language}</SelectValue>
            </SelectTrigger>
            <SelectContent className="cursor-pointer w-[100px]">
              {Object.keys(localeCodesList).map(locale => (
                <SelectItem key={locale} value={locale}>
                  {localeCodesList[locale].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
