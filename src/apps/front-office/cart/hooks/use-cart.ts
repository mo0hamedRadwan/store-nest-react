// src/apps/front-office/cart/hooks/useCart.ts
import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { toast } from "../../design-system/components/ui/use-toast";
import { CartItem } from "../../utils/types";
import { cartAtom } from "../atoms/cart-atom";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
} from "../services/cart-service";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch cart details once on mount
  useOnce(() => {
    setIsLoading(true);
    getCart()
      .then(response => {
        setCartItems(response.data.cart);
        cartAtom.update(response.data.cart);
      })
      .catch(err => {
        setError(
          err.response?.data?.error ||
            err.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => setIsLoading(false));
  });

  // Add product to cart
  const addProductToCart = (productId: number, quantity: number = 1) => {
    setIsLoading(true);
    addToCart(productId, quantity)
      .then(res => {
        console.log(res);

        toast(trans("addToCartError"));
      })
      .catch(() => {
        toast(trans("somethingWentWrong"));
      })
      .finally(() => setIsLoading(false));
  };

  // Remove product from cart
  const removeItemFromCart = (id: number) => {
    removeFromCart(id).catch(response => {
      toast(response.data.error);
    });
  };

  // Update product quantity in cart
  const updateCartItem = (id: number, amount: number) => {
    setIsLoading(true);

    updateCart(id, amount)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    cartItems,
    isLoading,
    error,
    addProductToCart,
    updateCartItem,
    removeItemFromCart,
  };
}
