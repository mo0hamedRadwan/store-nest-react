import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  Card,
  CardContent,
} from "apps/front-office/design-system/components/ui/card";
import { SwiperSlide } from "swiper/react";

interface Item {
  name: string;
  items: number;
  imgSrc: string;
}

interface CategoryCardProps {
  index: number;
  item: Item;
}

const CategoryCard = ({ index, item }: CategoryCardProps) => {
  const backgroundColors = ["#ECFFEC", "#FEEFEA", "#FFF3EB", "#FFF3FF"];

  const cardClass = `bg-${backgroundColors[index % backgroundColors.length]}`;

  return (
    <SwiperSlide key={index}>
      <div className="p-1">
        <Card className={cardClass}>
          <CardContent className="flex flex-col aspect-[1_/_1.5] items-center justify-center p-6">
            <figure>
              <Link>
                <img src={item.imgSrc} alt="img-product" />
              </Link>
            </figure>
            <p>
              <Link className=" text-slate-800 font-bold leading-relaxed text-sm md:text-md md:text-lg">
                {item.name}
              </Link>
            </p>
            <span className="text-slate-400 text-base font-normal my-1">
              {item.items} {trans("Items")}
            </span>
          </CardContent>
        </Card>
      </div>
    </SwiperSlide>
  );
};

export default CategoryCard;
