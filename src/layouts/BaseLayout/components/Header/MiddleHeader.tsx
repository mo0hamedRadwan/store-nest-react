import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import user from "app/account/user";
import { useState } from "react";
import { useLogo, useWindowScrollPosition } from "shared/hooks";
import { URLS } from "shared/utils";
import { middleHeaderActions, navbarIcons } from "./constant/middleHeaderData";
import SearchForm from "./forms/SearchForm";
import AccountMenu from "./menu/AccountMenu";
import CartMenu from "./menu/CartMenu";
import { NavigationMenu } from "./menu/NavigationMenu";

export function MiddleHeader() {
  const logo = useLogo();
  const [openNavMenu, setOpenNavMenu] = useState<boolean>(false);

  const windowScroll = useWindowScrollPosition();

  const toggleSidebar = () => {
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div
      className={`container bg-white w-full flex justify-between items-center py-2 ${
        windowScroll >= 25 &&
        "sticky top-0 z-50 lg:relative lg:top-auto lg:z-50"
      } `}>
      <div className="block lg:hidden text-6xl" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </div>
      <div>
        <Link to={URLS.home}>
          <img
            src={logo}
            alt="nest logo"
            className="w-[150px] sm:min-w-[180px] h-[45px] sm:h-[55px]"
          />
        </Link>
      </div>

      <SearchForm />

      <ul className="hidden lg:flex items-center gap-x-5 lx:gap-x-4">
        {middleHeaderActions.map(action => {
          return (
            <li
              key={action.name}
              className="relative pb-2 flex flex-col items-center group">
              {action.name === "myAccount" && user.isLoggedIn() && (
                <AccountMenu />
              )}
              {action.name === "cart" && <CartMenu />}
              {action.name !== "myAccount" && (
                <span className="w-5 h-5 flex items-center justify-center absolute -top-1 left-3 bg-primary text-white text-xs font-bold rounded-full">
                  5
                </span>
              )}

              {action.name === "myAccount" && !user.isLoggedIn() ? (
                <Link
                  to={URLS.auth.login}
                  className="flex flex-col items-center">
                  <span className="text-2xl cursor-pointer">
                    <i className="bx bx-door-open"></i>
                  </span>
                  <span className="ml-1 text-slate-500 hover:text-black">
                    {trans("login")}
                  </span>
                </Link>
              ) : (
                <>
                  <i className={`bx bx-${action.iconName} text-2xl`}></i>
                  <Link
                    to={action.href}
                    className="ml-1 text-slate-500 hover:text-black">
                    {trans(action.name)}
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>

      <ul className="lg:hidden flex justify-center items-center gap-x-5">
        {navbarIcons.map(icon => (
          <li key={icon.icon}>
            <Link to={icon.link} className="relative">
              <span className="w-5 h-5 flex items-center justify-center absolute -top-5 left-5 bg-primary text-white text-xs font-bold rounded-full">
                5
              </span>
              <i className={`bx bx-${icon.icon} text-4xl`}></i>
            </Link>
          </li>
        ))}
      </ul>

      {openNavMenu && <NavigationMenu toggleSidebar={toggleSidebar} />}
    </div>
  );
}
