"use client";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { OrderProvider } from "@/context/OrderContext";

export default function Providers({ children }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <OrderProvider>{children}</OrderProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
