import { Link } from "@mongez/react-router";
import { Product } from "../../../types";

type SuggestProductsMenuPropsType = {
  suggestProducts: Product[];
};

export default function SuggestProductsMenu({
  suggestProducts,
}: SuggestProductsMenuPropsType) {
  return (
    <ul className="absolute top-10 w-full h-60 p-2 overflow-y-scroll bg-white z-10  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
