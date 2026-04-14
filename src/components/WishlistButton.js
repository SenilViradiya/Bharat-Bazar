"use client";

import { useWishlist } from "@/context/WishlistContext";

export default function WishlistButton({ product, className = "" }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = isInWishlist(product.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={`h-9 w-9 bg-transparent flex items-center justify-center text-stone-700 hover:text-primary transition-colors ${className}`}
    >
      <span
        className="material-symbols-outlined text-[20px]"
        style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        favorite
      </span>
    </button>
  );
}
