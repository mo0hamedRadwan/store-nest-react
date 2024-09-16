import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  Card,
  CardContent,
} from "apps/front-office/design-system/components/ui/card";
import URLS from "apps/front-office/utils/urls";
import { Category } from "src/apps/front-office/shop/utils/types";

interface CategoryCardProps {
  index: number;
  item: Category;
}

const CategoryCard = ({ index, item }: CategoryCardProps) => {
  const backgroundColors = ["#ECFFEC", "#FEEFEA", "#FFF3EB", "#FFF3FF"];

  // Log the item for debugging
  // console.log("CategoryCard item:", item);

  // Safely access the name and image properties
  const itemName = item.name || "Unnamed";
  const itemImage = item.image?.url || "/images/featured-categories/kiwi.png"; // Fallback to a default image if the image URL is missing

  return (
    <Card
      style={{
        backgroundColor: backgroundColors[index % backgroundColors.length],
        height: "180px", // Set a fixed height for the entire card
        width: "135px",
      }}
      className="hover:border hover:border-primary hover:shadow-[rgba(0,_0,_0,_0.2)_0px_5px_5px]  duration-150 group">
      <CardContent className="flex flex-col items-center justify-center p-5">
        <Link to={`${URLS.home}/${item.slug}`}>
          <img
            src={itemImage}
            alt={itemName}
            className="w-20 h-20 object-contain"
            // style={{ maxHeight: "150px", objectFit: "contain" }} // Adjust image height
          />
        </Link>
        <Link
          to={`${URLS.home}/${item.slug}`}
          className="flex flex-col justify-center text-center">
          <span className="text-secondary group-hover:text-primary font-bold leading-relaxed text-sm md:text-md duration-200">
            {itemName}
          </span>
          <span className="text-slate-400 text-base font-normal my-1">
            {item?.totalProducts || 0} {trans("Items")}
          </span>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
