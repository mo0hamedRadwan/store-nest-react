import { trans } from "@mongez/localization";
import { useEvent } from "@mongez/react-hooks";
import { popularProductsAtom } from "app/home/atoms/popular-products-atom";
import { Product } from "app/shop/utils/types";
import { useState } from "react";

export type PopularProductsTabsProps = {
  title: string;
};

export default function PopularProductsTabs({
  title,
}: PopularProductsTabsProps) {
  const tabs = popularProductsAtom.use("tabs");

  return (
    <div className="container py-3 px-0 flex flex-col md:flex-row items-center justify-between">
      <h3 className="font-bold text-3xl text-[#253D4E]">{title}</h3>
      <ul className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4 mt-3 md:mt-0 w-full md:w-auto">
        <Tab tab={{ id: 0, name: trans("all") }} />
        {tabs.map(tab => (
          <Tab key={tab.id} tab={tab} />
        ))}
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
