import { useEffect, useRef, useState } from "react";

const useHover = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [hover, setHover] = useState<boolean>(false);

  const onMouseOver = () => setHover(true);
  const onMouseLeft = () => setHover(false);

  useEffect(() => {
    const element = ref.current;

    if (!element)
      throw new Error("useHover hook didn't hold `ref` for element!");

    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseleave", onMouseLeft);

    return () => {
      if (element) element.removeEventListener("mouseover", onMouseOver);
      element.removeEventListener("mouseleave", onMouseLeft);
    };
  }, [hover]);

  return {
    ref,
    isHover: hover,
  };
};

export default useHover;
