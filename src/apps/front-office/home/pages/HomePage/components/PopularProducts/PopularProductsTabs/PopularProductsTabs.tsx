import { trans } from "@mongez/localization";
import { useEvent } from "@mongez/react-hooks";
import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import { categoryTabs, products } from "apps/front-office/utils/data";
import { Product } from "apps/front-office/utils/types";
import { useState } from "react";

export type PopularProductsTabsProps = {
  children: React.ReactNode;
};

export default function PopularProductsTabs() {
  const tabs = categoryTabs.map(({ id, name }) => ({
    id,
    name,
    products: products.filter(({ category }) => category.id === id),
  }));

  return (
    <div className="container py-3 px-0 flex flex-col md:flex-row items-center justify-between">
      <h3 className="font-bold text-3xl text-[#253D4E]">
        {trans("popularProducts")}
      </h3>
      <ul className="flex flex-wrap items-center gap-3 md:gap-3">
        <Tab tab={{ id: 0, name: "All" }} />
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
      className={
        activeTab
          ? "text-primary-default font-bold hover:-translate-y-0.5 transition  duration-300"
          : "font-bold  text-[#253D4E]"
      }
      role="button"
      onClick={() => popularProductsAtom.change("activeTab", tab.id)}>
      {tab.name}
    </li>
  );
}
