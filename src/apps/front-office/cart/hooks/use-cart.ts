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
        cartAtom.update(response.data.cart.item);
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
  const handleAddToCart = (productId: number, quantity: number = 1) => {
    setIsLoading(true);
    addToCart(productId, quantity)
      .then(response => {
        setCartItems(response.data.cart);
        cartAtom.update(response.data.cart.items);
        toast(trans("addedToCart"));
      })
      .catch(() => {
        toast(trans("addToCartError"));
      })
      .finally(() => setIsLoading(false));
  };

  // Update product quantity in cart
  const handleUpdateCart = (itemId: number, quantity: number) => {
    setIsLoading(true);
    updateCart(itemId, quantity)
      .then(response => {
        console.log(response);
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === itemId ? { ...item, quantity } : item,
          ),
        );
        toast(trans("cartUpdated"));
      })
      .catch(() => {
        toast(trans("updateCartError"));
      })
      .finally(() => setIsLoading(false));
  };

  // Remove product from cart
  const handleRemoveFromCart = (itemId: number) => {
    setIsLoading(true);
    removeFromCart(itemId)
      .then(response => {
        console.log(response);

        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        toast(trans("removedFromCart"));
      })
      .catch(() => {
        toast(trans("removeFromCartError"));
      })
      .finally(() => setIsLoading(false));
  };

  return {
    cartItems,
    isLoading,
    error,
    handleAddToCart,
    handleUpdateCart,
    handleRemoveFromCart,
  };
}
