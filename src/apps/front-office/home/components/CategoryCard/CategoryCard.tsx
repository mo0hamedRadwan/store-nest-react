import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  Card,
  CardContent,
} from "apps/front-office/design-system/components/ui/card";
import { Discount, Image, LocaleValue } from "apps/front-office/utils/types";
import URLS from "apps/front-office/utils/urls";
import { SwiperSlide } from "swiper/react";

export interface Item {
  id: number;
  isActive: boolean;
  name: LocaleValue[];
  image: Image;
  slug: string;
  totalProducts: number;
  products: Product[];
}

export interface Product {
  id: number;
  isActive: boolean;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
  createdBy: CreatedBy;
  updatedBy: UpdatedBy;
  name: LocaleValue[];
  shortDescription: LocaleValue[];
  description: LocaleValue[];
  price: number;
  salePrice: number;
  discount: Discount;
  inStock: boolean;
  slug: string;
  isLowStock: boolean;
  sortOrder: number;
  purchase: {
    minQuantity: number;
  };
  type: string;
  hasDiscount: boolean;
  images: Image[];
  category: Category;
  inCart: boolean;
  inWishlist: boolean;
  inCompare: boolean;
}

export interface CreatedAt {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
  date: string;
  time: string;
}

export interface UpdatedAt {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
  date: string;
  time: string;
}

export interface CreatedBy {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
}

export interface UpdatedBy {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
}

export interface Category {
  id: number;
  isActive: boolean;
  name: LocaleValue[];
  image: Image;
  slug: string;
}

interface CategoryCardProps {
  index: number;
  item: Item;
}

const CategoryCard = ({ index, item }: CategoryCardProps) => {
  const backgroundColors = ["#ECFFEC", "#FEEFEA", "#FFF3EB", "#FFF3FF"];

  // Log the item for debugging
  // console.log("CategoryCard item:", item);

  // Safely access the name and image properties
  const itemName =
    item.name?.find(n => n.localeCode === "en")?.value || "Unnamed";
  const itemImage = item.image?.url || "/images/featured-categories/Kiwi.png"; // Fallback to a default image if the image URL is missing

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
                className=" text-slate-800 font-bold leading-relaxed text-sm md:text-md md:text-lg">
                {itemName}
              </Link>
            </p>
            <span className="text-slate-400 text-base font-normal my-1">
              {item.totalProducts} {trans("Items")}
            </span>
          </CardContent>
        </Card>
      </div>
    </SwiperSlide>
  );
};

export default CategoryCard;
