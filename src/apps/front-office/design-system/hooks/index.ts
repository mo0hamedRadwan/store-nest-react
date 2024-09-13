import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../home/services/home-service";
import { Product } from "../../utils/types";

/**
 * the purpose of this hook is get current position with live scrolling
 */
export function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}

/**
 * the purpose of this hook is add delay when call API
 */
export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/**
 * the purpose of this hook is filter products by product name and category id
 */
export function useFilterProducts(searchTerm: string, categoryId?: string) {
  // loading / data / error
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState<string>("");

  const debounceSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debounceSearch) {
      setFilteredProducts([]);
      return;
    }
    setIsLoading(true);
    getProducts({
      name: debounceSearch,
      category: categoryId,
    })
      .then(data => {
        const products = data.data.products as Product[];
        setFilteredProducts(products);
        setIsLoading(false);
        setIsError("");
      })
      .catch(error => {
        setIsLoading(false);
        setIsError(error.message);
        console.error(error);
      });
  }, [debounceSearch, categoryId]);

  return { isLoading, filteredProducts, isError };
}

/**
 *
 */

// export type PaginationProps = {
//   totalCount: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
//   pageSize: number;
//   siblingCount?: number;
//   className?: string;
// };
// export function usePagination({}: PaginationProps) {}
