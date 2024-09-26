import { Link } from "@mongez/react-router";
import { Product } from "app/shop/utils/types";

type SuggestProductsMenuPropsType = {
  suggestProducts: Product[];
};

export default function SuggestProductsMenu({
  suggestProducts,
}: SuggestProductsMenuPropsType) {
  return (
    <ul className="absolute top-10 w-full max-h-60 p-2 overflow-y-auto bg-white z-10 shadow-md">
      {suggestProducts.map(product => (
        <li
          key={product.id}
          className="p-2 hover:bg-primary hover:text-white rounded">
          <Link to="productLink">{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
