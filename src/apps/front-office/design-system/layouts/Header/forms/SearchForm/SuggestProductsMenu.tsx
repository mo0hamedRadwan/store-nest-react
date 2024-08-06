import { Link } from "@mongez/react-router";
import { Product } from "apps/front-office/utils/types";

type SuggestProductsMenuPropsType = {
  filteredProducts: Product[];
};

export default function SuggestProductsMenu({
  filteredProducts,
}: SuggestProductsMenuPropsType) {
  return (
    <ul className="absolute top-10 w-full h-60 p-2 overflow-y-scroll bg-white z-10  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {filteredProducts.map(product => (
        <li
          key={product.id}
          className="p-2 hover:bg-primary-default hover:text-white rounded">
          <Link to={`/product/${product.id}/${product.slug}`}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
