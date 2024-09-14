import { trans } from "@mongez/localization";
import { useEvent } from "@mongez/react-hooks";
import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import { useState } from "react";
import { Product } from "src/apps/front-office/shop/utils/types";

export type PopularProductsTabsProps = {
  children: React.ReactNode;
};

export default function PopularProductsTabs() {
  const tabs = popularProductsAtom.get("tabs");

  return (
    <div className="container py-3 px-0 flex flex-col md:flex-row items-center justify-between">
      <h3 className="font-bold text-3xl text-[#253D4E]">
        {trans("popularProducts")}
      </h3>
      <ul className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4 mt-3 md:mt-0 w-full md:w-auto">
        <Tab tab={{ id: 0, name: "All" }} />
        {tabs.length > 0 ? (
          tabs.map(tab => <Tab key={tab.id} tab={tab} />)
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
}

type TabProps = {
  tab: {
    id: number;
    name: string;
    products?: Product[];
  };
};

function Tab({ tab }: TabProps) {
  const [activeTab, setIsActiveTab] = useState(
    tab.id === popularProductsAtom.get("activeTab"),
  );

  useEvent(() =>
    popularProductsAtom.onChange((value, oldValue) => {
      if (value.activeTab === tab.id) {
        setIsActiveTab(true);
      } else if (oldValue.activeTab === tab.id) {
        setIsActiveTab(false);
      }
    }),
  );

  return (
    <li
      className={`font-semibold hover:text-primary hover:-translate-y-0.5 transition duration-200 ease-in-out ${activeTab ? "text-primary" : "text-[#253D4E]"}`}
      role="button"
      onClick={() => popularProductsAtom.change("activeTab", tab.id)}>
      {tab.name}
    </li>
  );
}
