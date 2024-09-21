import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { toast } from "../../design-system/components/ui/use-toast";
import { addToWishlist } from "../../home/services/home-service";
import { Product } from "../../utils/types";
import { wishListAtom } from "../atoms/wishlist-atom";
import { getWishlist, removeFromWishlist } from "../services/wishlist-service";

export function useWishlist() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(false);

  useOnce(() => {
    setIsLoading(true);
    getWishlist()
      .then(response => {
        setProducts(response.data.products);
        wishListAtom.update(response.data.products.length);
      })
      .catch(error => {
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => setIsLoading(false));
  });

  const isProductInWishlist = (productId: string) => {
    return products.some(product => product.id === Number(productId));
  };

  const removeWishlist = (productId: string) => {
    setIsLoading(true);
    removeFromWishlist(productId)
      .then(response => {
        setProducts(response.data.products);
        wishListAtom.update(response.data.products.length);
        toast(trans("removedFromWishlist"));
      })
      .catch(() => {
        toast(trans("removeFromWishlistError"));
      })
      .finally(() => setIsLoading(false));
  };

  const addWishlist = (productId: number | string) => {
    setIsLoading(true);
    addToWishlist(productId)
      .then(response => {
        setProducts(response.data.products);
        wishListAtom.update(response.data.products.length);
        toast(trans("addedToWishlist"));
      })
      .catch(() => {
        toast(trans("addToWishlistError"));
      })
      .finally(() => setIsLoading(false));
  };

  return {
    products,
    isLoading,
    error,
    isProductInWishlist,
    setProducts,
    removeWishlist,
    addWishlist,
  };
}
