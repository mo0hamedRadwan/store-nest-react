import { useEffect, useRef } from "react";

/**
 * purpose of this hook is handle click outside element
 */
export function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("mousestart", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("mousestart", clickHandler);
    };
  }, [callback]);

  return ref;
}
