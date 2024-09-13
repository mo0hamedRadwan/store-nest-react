import { Link } from "@mongez/react-router";
import { accountItems } from "../../constants";

type MyAccountLayoutPagePropsType = {
  name: string;
  children: React.ReactNode;
};

export default function MyAccountLayoutPage({
  name = "dashboard",
  children,
}: MyAccountLayoutPagePropsType) {
  return (
    <div className="px-0 py-10 xl:p-32 container flex gap-5 flex-wrap lg:flex-nowrap border border-red-500">
      <ul className="flex flex-row flex-wrap justify-center lg:flex-col lg:justify-start gap-2">
        {accountItems.map(accountItem => (
          <li
            key={accountItem.name}
            className={`px-8 py-4 w-[225px] rounded-lg border border-gray-200 ${
              accountItem.name === name
                ? "bg-primary text-white"
                : "text-specialColor-primary"
            } font-semibold text-lg`}>
            <Link to={accountItem.link} className="flex items-center gap-x-2">
              <span className="text-2xl">
                <i className={`bx ${accountItem.icon}`}></i>
              </span>
              <span
                className={`${accountItem.name !== name ? "hover:text-primary" : ""}`}>
                {accountItem.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-[920px] px-12 py-2">{children}</div>
    </div>
  );
}
