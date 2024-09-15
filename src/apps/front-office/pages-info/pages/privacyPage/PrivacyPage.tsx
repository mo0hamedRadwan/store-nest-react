"use client";

import CategorySidebar from "src/apps/front-office/shop/pages/ShopPage/components/CategorySidebar";
import Content from "./Content";

export default function PrivacyPage() {
  return (
    <div className="flex">
      <div className=" ">
        <CategorySidebar />
      </div>
      <div className="">
        <Content />
      </div>
    </div>
  );
}
