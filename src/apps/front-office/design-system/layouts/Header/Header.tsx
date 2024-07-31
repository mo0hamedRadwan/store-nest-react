import { useEffect } from "react";
import { Separator } from "../../components/ui/separator";
import categoriesAtom from "../atoms/categoriesAtom";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  const setCategories = categoriesAtom.setCategories;

  useEffect(() => {
    setCategories();
  });

  return (
    <div className="font-custom">
      <TopHeader />
      <Separator />
      <MiddleHeader />
      <Separator />
      <BottomHeader />
      <Separator />
    </div>
  );
}
