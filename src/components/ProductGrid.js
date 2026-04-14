"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products as allProducts } from "@/data/products";
import WishlistButton from "@/components/WishlistButton";

const filters = [
  { label: "All Produce", value: "all" },
  { label: "Fresh Arrivals", value: "fresh" },
  { label: "Organic", value: "organic" },
  { label: "Seasonal", value: "seasonal" },
];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { cartItems, addToCart, removeFromCart, getQuantity } = useCart();

  const filteredProducts =
    activeFilter === "all"
      ? allProducts.filter((p) => p.category === "fruits" || p.category === "vegetables")
      : allProducts.filter((p) => p.filterCategory === activeFilter);

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation();
    addToCart(product);
  };

  const handleRemoveFromCart = (e, product) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation();
    removeFromCart(product.id);
  };

  return (
    <>
      {/* Filter Chips */}
      <div className="flex gap-2 hide-scrollbar overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-6 py-2  font-medium text-sm whitespace-nowrap transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-primary text-on-primary shadow-sm scale-105"
                : "bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline font-bold text-2xl">Fresh From The Farm</h3>
          <span className="text-on-surface-variant text-sm">
            Showing <span className="font-bold text-on-surface">{filteredProducts.length}</span> items
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-x-6 gap-y-10">
          {filteredProducts.map((p) => {
            const quantity = getQuantity(p.id);
            return (
              <Link key={p.id} href={`/product/${p.id}`} className="flex flex-col group bg-[#efefef] p-3 relative">
                <WishlistButton product={p} className="absolute top-2 right-2 z-10 h-7 w-7" />
                <div className="aspect-square bg-white overflow-hidden relative mb-3">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={400}
                  />
                  {p.badge && (
                    <span
                      className={`absolute top-3 left-3 ${p.badgeClass} text-[10px] font-bold px-2 py-0.5 `}
                    >
                      {p.badge}
                    </span>
                  )}
                  {quantity > 0 ? (
                     <div 
                      className="absolute left-2 right-2 bottom-2 h-9 bg-white border border-stone-400 flex items-center justify-between px-2" 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                     >
                       <button
                         onClick={(e) => handleRemoveFromCart(e, p)}
                         className="w-7 h-7 flex items-center justify-center text-primary"
                       >
                         <span className="material-symbols-outlined text-sm">remove</span>
                       </button>
                       <span className="font-bold text-on-surface text-sm">{quantity}</span>
                       <button
                         onClick={(e) => handleAddToCart(e, p)}
                         className="w-7 h-7 flex items-center justify-center text-primary"
                       >
                         <span className="material-symbols-outlined text-sm">add</span>
                       </button>
                     </div>
                  ) : (
                    <button
                      onClick={(e) => handleAddToCart(e, p)}
                      className="absolute left-2 right-2 bottom-2 h-9 border border-stone-400 bg-white text-[#0f6483] font-bold"
                    >
                      Add
                    </button>
                  )}
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-base text-on-surface mb-0.5 leading-tight">
                    {p.name}
                  </h4>
                  <p className="text-on-surface-variant text-xs mb-1">{p.weight}</p>
                  <span className="text-on-surface font-bold text-2xl">₹{p.price}</span>
                </div>
              </Link>
            )
          })}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-surface-container-highest mb-4 block">
              search_off
            </span>
            <p className="text-on-surface-variant text-lg">No products found in this category</p>
          </div>
        )}
      </section>
    </>
  );
}
