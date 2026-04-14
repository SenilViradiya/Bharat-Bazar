"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  if (quantity > 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-secondary-container  px-2 py-1">
          <button 
            onClick={() => removeFromCart(product.id)}
            className="w-10 h-10 flex items-center justify-center text-on-secondary-container hover:bg-white/50  transition-colors"
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className="px-4 font-bold text-on-secondary-container text-lg">{quantity}</span>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 flex items-center justify-center text-on-secondary-container hover:bg-white/50  transition-colors"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button 
      onClick={() => addToCart(product)}
      className="w-full md:w-auto px-12 bg-primary text-on-primary py-4  font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
    >
      Add to Cart
    </button>
  );
}
