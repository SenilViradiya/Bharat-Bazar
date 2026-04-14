"use client";

import { useCart } from "@/context/CartContext";

export default function ShowWhenCartHasItems({ children }) {
  const { cartItems } = useCart();
  const hasItems = Object.keys(cartItems || {}).length > 0;

  if (!hasItems) {
    return null;
  }

  return children;
}
