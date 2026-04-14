"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  // Initialize from exact same state if needed, but simple state is fine for now
  const addToCart = (product) => {
    setCartItems((prev) => ({
      ...prev,
      [product.id]: {
        ...product,
        quantity: (prev[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]?.quantity > 1) {
        newCart[productId].quantity -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const removeItemFromCart = (productId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };
  
  const getQuantity = (productId) => {
    return cartItems[productId]?.quantity || 0;
  };

  const clearCart = () => setCartItems({});

  const cartTotalItems = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeItemFromCart, getQuantity, clearCart, cartTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
