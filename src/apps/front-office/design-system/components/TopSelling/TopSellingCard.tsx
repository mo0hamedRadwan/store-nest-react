import { toCurrency } from "../../utils/currency";
import Rating from "../Rating";

export type topSellingCardType = {
  productImageTop?: string;
  productName?: string;
  productTitle?: string;
  salePrice?: number;
  priceOld?: number;
};

export default function TopSellingCard({
  productImageTop,
  productName,
  salePrice,
  priceOld,
}: topSellingCardType) {
  return (
    <div className="flex gap-5 mb-7 cursor-pointer relative group hover:-translate-y-2 duration-700 small-to-medium:block small-to-medium:m-auto">
      <div className="w-[100px] h-[100px]">
        <img
          className="w-full h-full rounded-xl"
          src={productImageTop}
          alt="not Found"
        />
      </div>
      <div className="flex flex-col justify-between gap-y-3">
        <div>
          <h6 className="font-bold text-sm xl:text-base leading-5 text-[#253D4E] group-hover:text-[#3BB77E] duration-500 line-clamp-2">
            {productName}
          </h6>
          <div className="flex">
            <Rating rate={Math.floor(Math.random() * 5 + 1)} />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <h3 className="text-lg font-bold text-[#3BB77E]">
            {toCurrency(salePrice!)}
          </h3>
          <h5 className="text-sm font-bold mt-1 line-through text-[#adadad]">
            {priceOld && toCurrency(priceOld)}
          </h5>
        </div>
      </div>
    </div>
  );
}
