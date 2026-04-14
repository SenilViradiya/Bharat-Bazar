"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wishlistItems");
      if (stored) {
        setWishlistItems(JSON.parse(stored));
      }
    } catch {
      setWishlistItems({});
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    } catch {
      // Ignore storage write failures.
    }
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => ({
      ...prev,
      [product.id]: product,
    }));
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  };

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev[product.id]) {
        const updated = { ...prev };
        delete updated[product.id];
        return updated;
      }
      return {
        ...prev,
        [product.id]: product,
      };
    });
  };

  const isInWishlist = (productId) => Boolean(wishlistItems[productId]);

  const wishlistCount = useMemo(
    () => Object.keys(wishlistItems).length,
    [wishlistItems]
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
