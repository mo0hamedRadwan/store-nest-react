import { Link } from "@mongez/react-router";
import { Separator } from "../../components/ui/separator";
import { topHeaderLanguages, topHeaderLinks } from "./constant/topHeaderData";

const TopHeader = () => {
  return (
    <div className="container hidden md:flex md:justify-between items-center py-2 text-sm lg:bg-white lg:dark:bg-slate-900 md:bg-primary-default lg:text-black lg:dark:text-white md:text-white">
      <ul className="hidden lg:flex items-center">
        {topHeaderLinks.map((link, index) => (
          <li key={link.name} className="flex items-center">
            <Link
              to={link.href}
              className="text-slate-700 hover:text-slate-950 hover:dark:text-white">
              {link.name}
            </Link>
            {index !== topHeaderLinks.length - 1 && (
              <Separator orientation="vertical" className="h-2.5 mx-2.5" />
            )}
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex lg:w-auto md:w-full justify-center">
        <li>Trendy 25: silver jewelry, save up 35% off today</li>
        {/* <li>100% Secure delivery without contacting the courier</li> */}
        {/* <li>Supper Value Deals - Save more with coupons</li> */}
      </ul>
      <ul className="hidden lg:flex items-center gap-x-2">
        <li>
          <p>
            Need help? Call Us:
            <span className="text-primary-default hover:text-main-700 hover:font-bold">
              + 1800 900
            </span>
          </p>
        </li>
        <li>
          <select className="text-black font-semibold">
            {topHeaderLanguages.map(lang => (
              <option value={lang.code} key={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
