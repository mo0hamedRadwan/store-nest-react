import { Link } from "@mongez/react-router";
import { FaShoppingCart } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
const DealCard = ({
  imageSrc,
  title,
  rating,
  by,
  price,
  oldPrice,
  timeCards,
}) => {
  return (
    <div className="w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/4-1rem)] p-2">
      <div className="border-0 pb-12 relative bg-white rounded-2xl overflow-hidden transition duration-200 ">
        <div className="relative z-0">
          <div className="relative overflow-hidden rounded-3xl">
            <Link className="block" href="#">
              <img src={imageSrc} alt={title} className="w-full h-auto" />
            </Link>
          </div>
        </div>
        <div className="relative mt-[-70px] z-[3] p-4 mx-auto transition-all duration-500 hover:mt-[-80px]">
          <div className="absolute top-[-50px] w-full text-center">
            <div className="flex space-x-2 gap-1 justify-center mr-8">
              {timeCards.map((card, index) => (
                <span
                  key={index}
                  className="text-sm font-bold text-gray-500 bg-white rounded-md px-2 py-1 w-full">
                  <span className="hover-up">{card.time}</span> <br />
                  <span className="text-xs">{card.type}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md pt-6 pb-6 px-5">
            <h2 className="font-quicksand text-sm font-bold mb-1 transition duration-300 hover:text-teal-500">
              <Link href="#">{title}</Link>
            </h2>
            <div className="mt-2">
              <div className="flex items-center space-x-0">
                <div className="h-4 w-6 rounded-md">
                  <FcRating />
                </div>
                <span className="text-sm ml-0 text-gray-500">({rating})</span>
              </div>
            </div>
            <div className="text-base font-normal leading-6 font-lato mt-1">
              <span className="text-gray-500 pr-1 mt-1">BY</span>
              <Link
                className="text-teal-500 transition duration-300 hover:text-orange-400"
                href="#">
                {by}
              </Link>
            </div>
            <div className="flex justify-between mt-4 font-bold">
              <div className="pt-1">
                <span className="text-teal-500 text-lg">${price}</span>
                <span className="text-base text-gray-500 ml-2 line-through">
                  ${oldPrice}
                </span>
              </div>
              <div>
                <Link
                  className="flex items-center py-1.5 px-5 rounded-md bg-teal-200 font-bold text-base text-teal-500 duration-300 hover:text-white hover:bg-green-600"
                  href="#">
                  <FaShoppingCart className="mr-1" />
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
