import { cn } from "@utils";
import { useState } from "react";

export default function DailyBestFilter() {
  const [filterItem, setFilterItem] = useState<string>("Featured");
  return (
    <div className="best-sells-filter">
      <div className="best-sells-filter__accordion flex items-center gap-2 py-4">
        {["Featured", "Popular", "New added"].map(text => (
          <button
            key={text}
            onClick={() => setFilterItem(text)}
            className={cn([
              "best-sells-filter__item",
              "text-sm font-semibold py-1 px-2 rounded-ee-md rounded-ss-md",
              "hover:text-white hover:bg-primary hover:translate-y-1",
              "transition-all",
              {
                "bg-primary text-white": filterItem === text,
                "translate-y-1": filterItem === text,
              },
            ])}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
