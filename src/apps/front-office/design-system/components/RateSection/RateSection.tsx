import { useState } from "react";
import RateStar from "./RateStar";

type RateSectionProps = {
  rate: number;
};

export default function RateSection({ rate }: RateSectionProps) {
  const [mode, setMode] = useState<string>(() =>
    rate > -1 ? "actives" : "hover",
  );

  const [hovers, setHovers] = useState<number>(-1);
  const [actives, setActives] = useState<number>(-1);

  const accumulateActive = (rank: number) => _ => {
    setActives(rank);
  };

  const accumulateHover = (rank: number) => _ => {
    setMode("hover");
    setHovers(rank);
  };

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <RateStar
          key={index}
          className="w-4 h-4 my-2 mx-[-2px]"
          onClick={accumulateActive(index)}
          onMouseEnter={accumulateHover(index)}
          onMouseLeave={() => setMode("actives")}
          active={index <= (mode === "hover" ? hovers : actives) ? true : false}
        />
      ))}
    </>
  );
}
