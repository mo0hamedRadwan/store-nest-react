import { Separator } from "design-system/components/ui/separator";
import BottomHeader from "./BottomHeader";
import { MiddleHeader } from "./MiddleHeader";

export default function Header() {
  return (
    <div className="font-custom">
      <MiddleHeader />
      <Separator />
      <BottomHeader />
      <Separator />
    </div>
  );
}
