// src/apps/front-office/cart/hooks/useCart.ts
import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { toast } from "design-system/components/ui/use-toast";
import { useState } from "react";
import { cartAtom } from "../atoms/cart-atom";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
} from "../services/cart-service";

export function useCart() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const addProductToCart = (productId: number, quantity: number = 1) => {
    setIsLoading(true);
    addToCart(productId, quantity)
      .then(() => {
        toast(trans("addToCartError"));
      })
      .catch(() => {
        toast(trans("somethingWentWrong"));
      })
      .finally(() => setIsLoading(false));
  };

  const removeItemFromCart = (itemId: string) => {
    setIsLoading(true);
    removeFromCart(itemId)
      .then(response => {
        cartAtom.update(response.data.cart);
        toast(trans("removeFromCartError"));
      })
      .catch(() => {
        toast(trans("somethingWentWrong"));
      })
      .finally(() => setIsLoading(false));
  };

  const updateCartItem = (id: number, amount: number) => {
    setIsLoading(true);

    updateCart(id, amount)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
        toast(trans("somethingWentWrong"));
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    error,
    addProductToCart,
    updateCartItem,
    removeItemFromCart,
  };
}
export function useCartLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    getCart()
      .then(response => {
        cartAtom.update(response.data.cart);
        setIsLoading(false);
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

  return {
    isLoading,
    error,
  };
}
