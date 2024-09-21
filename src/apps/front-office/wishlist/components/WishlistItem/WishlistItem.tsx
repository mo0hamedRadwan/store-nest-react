import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useState } from "react";
import Stars from "src/apps/front-office/design-system/components/Stars";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import {
  TableCell,
  TableRow,
} from "src/apps/front-office/design-system/components/ui/table";
import StyledCheckBox from "src/apps/front-office/shop/pages/ShopPage/components/FilterSide/StyledCheckBox";
import { Product } from "src/apps/front-office/utils/types";
import { useWishlist } from "../../hooks/use-wishlist";
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
export type WishlistItemProps = {
  product: Product;
  removeProduct: (productId: number | string) => void;
};
export default function WishlistItem({
  product,
  removeProduct,
}: WishlistItemProps) {
  const { removeWishlist } = useWishlist();
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    data.map(() => false),
  );

  const handleCheckboxClick = (index: number) => {
    setCheckedItems(prevState =>
      prevState.map((checked, idx) => (idx === index ? !checked : checked)),
    );
  };
  function deleteProductHandler() {
    removeWishlist(product.id.toString());
    removeProduct(product.id);
  }

  function addProductToCart(id: number, arg1: number): void {
    // this function is not implemented yet, waiting for atom or hook to be implemented
    const product = { id, quantity: arg1 };
    console.log(product);
    throw new Error("Function not implemented yet");
  }

  return (
    <>
      <TableRow>
        <TableCell className="align-middle py-[10px] md:py-[15px]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Checkbox and Image */}
            <div className="flex items-center gap-4">
              <div
                onClick={() => handleCheckboxClick(product.id)}
                className="cursor-pointer">
                <StyledCheckBox checked={checkedItems[product.id]} />
              </div>
              <img
                src={product.images[0].url}
                alt={product.name}
                className="max-w-[80px] md:max-w-[100px] rounded-[15px] border border-solid border-[#ececec]"
              />
            </div>

            {/* Product Title and Stars */}
            <div className="w-full">
              <h6 className="text-[15px] md:text-[14px] font-custom font-bold leading-[1.2] mb-[10px]">
                <Link href="#">{product.name}</Link>
              </h6>
              <div className="flex items-center text-[#B6B6B6]">
                <Stars ratings={product.rating} />
                <span className="text-[10px] ml-[3px] md:text-[12px] md:ml-[5px] font-medium font-lato">
                  ({product.rating})
                </span>
              </div>

              {/* Buttons stacked below product on small screens */}
              <div className="mt-4 flex items-center justify-between md:hidden">
                <Button
                  variant={"default"}
                  className="text-xs leading-[1.5] font-bold tracking-[0.5px] font-custom inline-block">
                  {trans("addToCart")}
                </Button>
                <i className="bx bx-trash text-lg text-specialColor-primary cursor-pointer"></i>
              </div>
            </div>
          </div>
        </TableCell>

        {/* Price */}
        <TableCell className="hidden md:table-cell w-[10%] text-center py-[10px] md:py-[15px]">
          <h3 className="text-[18px] md:text-[32px] font-custom font-bold leading-[1.2]">
            ${product.price}
          </h3>
        </TableCell>

        {/* Stock Status only visible on medium and larger screens */}
        <TableCell className="hidden md:table-cell w-[10%] py-[10px] text-center">
          <span
            className={`py-1 px-2 text-xs md:text-sm font-custom font-bold inline-block rounded ${
              product.inStock
                ? "bg-[#DEF9EC] text-priceNowColor"
                : "bg-[#fde0e9] text-[#f74b81]"
            }`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </TableCell>

        {/* Action only visible on medium and larger screens */}
        <TableCell className="hidden md:table-cell w-[10%] py-[15px] text-center">
          <Button
            onClick={() => addProductToCart(product.id, 1)}
            variant={"default"}
            className="text-xs leading-[1.5] font-bold tracking-[0.5px] font-custom inline-block">
            {trans("addToCart")}
          </Button>
        </TableCell>

        {/* Remove */}
        <TableCell className="hidden md:table-cell w-[10%] text-center">
          <button onClick={deleteProductHandler}>
            <i className="bx bx-trash text-lg text-specialColor-primary cursor-pointer"></i>
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}
