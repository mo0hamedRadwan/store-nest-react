import { Star, StarHalf } from "lucide-react";

type TrendingProductProps = {
  title: string;
  price: number;
  image: string;
};

export default function TrendingProduct({
  title,
  price,
  image,
}: TrendingProductProps) {
  return (
    <div
      className="flex items-center gap-5 mb-7 cursor-pointer relative 
      group hover:-translate-y-2 duration-700
       small-to-medium:block small-to-medium:m-auto">
      <div>
        <img className="rounded-xl" src={image} alt="not Found" />
      </div>
      <div>
        <h6 className="font-medium text-xl text-primary leading-5 group-hover:text-priceNowColor duration-500">
          {title}
        </h6>
        <div className="hidden xl:flex gap-1">
          <ul className="flex items-center">
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <StarHalf className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
          </ul>
        </div>
        <div className="flex gap-2 mt-1">
          <h3 className="text-lg font-medium text-priceNowColor">{price}$</h3>
        </div>
      </div>
    </div>
  );
}
