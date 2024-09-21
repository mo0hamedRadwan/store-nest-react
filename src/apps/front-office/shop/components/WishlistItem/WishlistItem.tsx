import { Link } from "@mongez/react-router";
import { useState } from "react";
import Stars from "src/apps/front-office/design-system/components/Stars";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/apps/front-office/design-system/components/ui/table";
import StyledCheckBox from "../FilterSide/StyledCheckBox";

import { trans } from "@mongez/localization";

const data = [
  {
    title: "Field Roast Chao Cheese Creamy Original",
    price: "$2.51",
    backgroundImage:
      "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg",
    rating: 4.0,
    status: "In Stock",
    action: "Add to cart",
  },
  {
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$3.2",
    backgroundImage:
      "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg",
    rating: 4.0,
    status: "Out Stock",
    action: "Contact Us",
  },
];

export default function WishlistItem() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    data.map(() => false),
  );

  const handleCheckboxClick = (index: number) => {
    setCheckedItems(prevState =>
      prevState.map((checked, idx) => (idx === index ? !checked : checked)),
    );
  };

  return (
    <div className="max-w-[1145px] overflow-hidden">
      {/* Ensure table is scrollable on small screens */}
      <Table className="border border-solid border-[#e9ecef] table-auto w-full">
        <TableHeader className="bg-[#ececec]">
          <TableRow className="font-custom text-[17px] font-bold text-specialColor-secondary">
            <TableHead className="w-1/2 md:w-[40%] md:py-[18px]">
              <div className="flex items-center gap-2">
                <div className="cursor-pointer">
                  <StyledCheckBox checked={false} />
                </div>
                {trans("product")}
              </div>
            </TableHead>
            {/* Hide these columns on smaller screens */}
            <TableHead className="hidden md:table-cell w-[10%] md:py-[18px] text-center">
              {trans("price")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[15%] md:py-[18px] text-center">
              {trans("stockStatus")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[15%] md:py-[18px] text-center">
              {trans("action")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[10%] text-center">
              {trans("remove")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="align-middle py-[10px] md:py-[15px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Checkbox and Image */}
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => handleCheckboxClick(index)}
                      className="cursor-pointer">
                      <StyledCheckBox checked={checkedItems[index]} />
                    </div>
                    <img
                      src={item.backgroundImage}
                      alt={item.title}
                      className="max-w-[80px] md:max-w-[100px] rounded-[15px] border border-solid border-[#ececec]"
                    />
                  </div>

                  {/* Product Title and Stars */}
                  <div className="w-full">
                    <h6 className="text-[15px] md:text-[14px] font-custom font-bold leading-[1.2] mb-[10px]">
                      <Link href="#">{item.title}</Link>
                    </h6>
                    <div className="flex items-center text-[#B6B6B6]">
                      <Stars ratings={item.rating} />
                      <span className="text-[10px] ml-[3px] md:text-[12px] md:ml-[5px] font-medium font-lato">
                        ({item.rating.toFixed(1)})
                      </span>
                    </div>

                    {/* Buttons stacked below product on small screens */}
                    <div className="mt-4 flex items-center justify-between md:hidden">
                      <Button
                        variant={
                          item.action === "Add to cart" ? "default" : "special"
                        }
                        className="text-xs leading-[1.5] font-bold tracking-[0.5px] font-custom inline-block">
                        {item.action}
                      </Button>
                      <i className="bx bx-trash text-lg text-specialColor-primary cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Price */}
              <TableCell className="hidden md:table-cell w-[10%] text-center py-[10px] md:py-[15px]">
                <h3 className="text-[18px] md:text-[32px] font-custom font-bold leading-[1.2]">
                  {item.price}
                </h3>
              </TableCell>

              {/* Stock Status only visible on medium and larger screens */}
              <TableCell className="hidden md:table-cell w-[10%] py-[10px] text-center">
                <span
                  className={`py-1 px-2 text-xs md:text-sm font-custom font-bold inline-block rounded ${
                    item.status === "In Stock"
                      ? "bg-[#DEF9EC] text-priceNowColor"
                      : "bg-[#fde0e9] text-[#f74b81]"
                  }`}>
                  {item.status}
                </span>
              </TableCell>

              {/* Action only visible on medium and larger screens */}
              <TableCell className="hidden md:table-cell w-[10%] py-[15px] text-center">
                <Button
                  variant={
                    item.action === "Add to cart" ? "default" : "special"
                  }
                  className="text-xs leading-[1.5] font-bold tracking-[0.5px] font-custom inline-block">
                  {item.action}
                </Button>
              </TableCell>

              {/* Remove */}
              <TableCell className="hidden md:table-cell w-[10%] text-center">
                <i className="bx bx-trash text-lg text-specialColor-primary cursor-pointer"></i>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
