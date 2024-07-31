import { Star } from "lucide-react";

type RateStarProps = {
  active?: boolean;
} & React.HTMLProps<HTMLDivElement>;

const RateStar = ({ active = true, ...rest }: RateStarProps) => {
  return (
    <div {...rest}>
      <Star
        className="w-full h-full"
        fill={active ? "orange" : "#ccc"}
        stroke="transparent"
      />
    </div>
  );
};

export default RateStar;
