import { Link } from "@mongez/react-router";
import logo from "assets/images/logo.svg";
import { useState } from "react";
import { useWindowScroll } from "../../hooks";
import { middleHeaderActions, navbarIcons } from "./constant/middleHeaderData";
import AccountMenu from "./menu/AccountMenu";
import CartMenu from "./menu/CartMenu";
import NavigationMenu from "./menu/NavigationMenu";
import SearchFormInMiddleHeader from "./SearchFormInMiddleHeader";

const MiddleHeader = () => {
  // to handle login user
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isLogin, setIsLogin] = useState(true);
  const [openNavMenu, setOpenNavMenu] = useState<boolean>(false);

  const windowScroll = useWindowScroll();

  const toggleSidebar = () => {
    // console.log("toggleSidebar");
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div
      className={`container bg-white w-full flex justify-between items-center py-3 lg:py-7 ${windowScroll >= 25 && "sticky top-0 z-50 lg:relative lg:top-auto lg:z-0"}`}>
      <div className="block lg:hidden text-6xl" onClick={() => toggleSidebar()}>
        <i className="bx bx-menu"></i>
      </div>
      <div>
        <img
          src={logo}
          alt="nest logo"
          className="w-[150px] sm:min-w-[180px] h-[45px] sm:h-[55px]"
        />
      </div>

      <SearchFormInMiddleHeader />

      <ul className="hidden lg:flex items-center gap-x-2 lx:gap-x-4">
        {middleHeaderActions.map(action => {
          return (
            <li key={action.name} className="relative pb-4  group">
              {action.name === "Account" && isLogin && <AccountMenu />}
              {action.name === "Cart" && isLogin && <CartMenu />}
              {action.name !== "Account" && isLogin && (
                <span className="w-5 h-5 flex items-center justify-center absolute -top-1 left-3 bg-primary-default text-white text-xs font-bold rounded-full">
                  5
                </span>
              )}

              {action.name === "Account" && !isLogin ? (
                <>
                  <i className="bx bx-door-open text-2xl"></i>
                  <Link
                    to="/login"
                    className="ml-1 text-slate-500 hover:text-black">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <i className={`bx bx-${action.iconName} text-2xl`}></i>
                  <Link
                    to={action.href}
                    className="ml-1 text-slate-500 hover:text-black">
                    {action.name}
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
              <span className="w-5 h-5 flex items-center justify-center absolute -top-5 left-5 bg-primary-default text-white text-xs font-bold rounded-full">
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
};

export default MiddleHeader;
