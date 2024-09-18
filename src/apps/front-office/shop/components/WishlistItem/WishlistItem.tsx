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

const data = [
  {
    title: "Field Roast Chao Cheese Creamy Original",
    price: "$2.51",
    backgroundImage:
      "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg",
    rating: 4.0,
  },
  {
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$3.2",
    backgroundImage:
      "https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg",
    rating: 4.0,
  },
];

export default function WishlistItem() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    data.map(() => false),
  ); // Track each checkbox state

  // Function to toggle checkbox state for individual items
  const handleCheckboxClick = (index: number) => {
    setCheckedItems(prevState =>
      prevState.map((checked, idx) => (idx === index ? !checked : checked)),
    );
  };

  return (
    <>
      <Table className="border border-solid border-[#e9ecef]">
        <TableHeader className="bg-[#ececec] py-[10px] md:py-[18px]">
          <TableRow className="font-custom text-[17px] font-bold text-specialColor-secondary">
            <TableHead className="w-[50%] md:w-[85%]">
              <div className="flex items-center gap-2">
                <div className="cursor-pointer">
                  <StyledCheckBox checked={false} />
                </div>
                Product
              </div>
            </TableHead>
            <TableHead className="w-[10%] text-center">Price</TableHead>
            <TableHead className="w-[10%] md:table-cell">
              Stock Status
            </TableHead>
            <TableHead className="w-[10%] md:table-cell text-center">
              Action
            </TableHead>
            <TableHead className="w-[10%] text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="align-middle py-[10px] md:py-[15px]">
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => handleCheckboxClick(index)}
                    className="cursor-pointer">
                    <StyledCheckBox checked={checkedItems[index]} />
                  </div>

                  <img
                    src={item.backgroundImage}
                    alt={item.title}
                    className="max-w-[100px] md:max-w-[120px] rounded-[15px]"
                  />

                  <div>
                    <h6 className="text-[13px] md:text-[15px] font-custom font-bold leading-[1.2]">
                      <Link href="#">{item.title}</Link>
                    </h6>
                    {/* Add Star Rating */}
                    <div className="flex items-center text-[#B6B6B6]">
                      <Stars ratings={item.rating} />
                      <span className="text-[12px] ml-[3px] md:text-[14px] md:ml-[5px] font-medium">
                        ({item.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                </div>
              </TableCell>

              <TableCell className="w-[10%] text-center py-[10px] md:py-[15px]">
                <h3 className="text-[20px] md:text-[24px] lg:text-[32px] font-custom font-bold leading-[1.2]">
                  {item.price}
                </h3>
              </TableCell>
              <TableCell className="md:table-cell w-[10%] py-[10px] md:py-[15px] text-center">
                <span className="bg-[#DEF9EC] text-priceNowColor inline-block py-2 px-1 font-custom font-bold text-[12px] md:text-[14px] leading-[1] rounded">
                  In Stock
                </span>
              </TableCell>
              <TableCell className="w-[10%] py-[15px]">
                <Button
                  variant="default"
                  className="text-xs leading-[1.8] font-bold tracking-[0.5px] font-custom py-2 px-[12px] md:px-[18px] inline-block">
                  Add to cart
                </Button>
              </TableCell>
              <TableCell className="w-[10%] text-center">
                <i className="bx bx-trash text-specialColor-primary cursor-pointer"></i>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      ;
    </>
  );
}
