import { useEffect, useRef, useState } from "react";

const useHover = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [hover, setHover] = useState<boolean>(false);

  const onMouseOver = () => setHover(true);
  const onMouseLeft = () => setHover(false);

  useEffect(() => {
    if (!ref.current)
      throw new Error("useHover hook didn't hold `ref` for element!");

    ref.current.addEventListener("mouseover", onMouseOver);
    ref.current.addEventListener("mouseleave", onMouseLeft);

    return () => {
      ref.current!.removeEventListener("mouseover", onMouseOver);
      ref.current!.removeEventListener("mouseleave", onMouseLeft);
    };
  }, [hover]);

  return {
    ref,
    isHover: hover,
  };
};

export default useHover;
