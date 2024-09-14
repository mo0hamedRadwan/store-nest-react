import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  Card,
  CardContent,
} from "apps/front-office/design-system/components/ui/card";
import URLS from "apps/front-office/utils/urls";
import { Category } from "src/apps/front-office/utils/types";
import { SwiperSlide } from "swiper/react";

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
    <SwiperSlide key={index}>
      <div className="p-1">
        <Card
          style={{
            backgroundColor: backgroundColors[index % backgroundColors.length],
            height: "200px", // Set a fixed height for the entire card
          }}>
          <CardContent className="flex flex-col items-center justify-center p-6 h-full">
            <figure>
              <Link to={`${URLS.home}/${item.slug}`}>
                <img
                  src={itemImage}
                  alt={itemName}
                  style={{ maxHeight: "150px", objectFit: "contain" }} // Adjust image height
                />
              </Link>
            </figure>
            <p>
              <Link
                to={`${URLS.home}/${item.slug}`}
                className=" text-slate-800 font-bold leading-relaxed text-sm md:text-md">
                {itemName}
              </Link>
            </p>
            <span className="text-slate-400 text-base font-normal my-1">
<<<<<<< Updated upstream
              {item.totalProducts || 0} {trans("Items")}
=======
              {item.products?.length} {trans("Items")}
>>>>>>> Stashed changes
            </span>
          </CardContent>
        </Card>
      </div>
    </SwiperSlide>
  );
};

export default CategoryCard;
