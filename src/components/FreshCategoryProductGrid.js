"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products as allProducts } from "@/data/products";
import WishlistButton from "@/components/WishlistButton";

export default function FreshCategoryProductGrid() {
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart, removeFromCart, getQuantity } = useCart();

  const filteredProducts = allProducts.filter((p) => p.category === "fruits" || p.category === "vegetables");

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleRemoveFromCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(product.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-surface-container-high px-4 py-2  font-bold text-sm"
        >
          <span className="material-symbols-outlined">filter_list</span>
          {showFilters ? "Hide Filters" : "Filters"}
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-stone-400">Sort By:</span>
          <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer">
            <option>Fresh Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <section className={showFilters ? "grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start" : ""}>
        {showFilters && (
          <aside className="border border-stone-200 bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Category</h3>
              <button onClick={() => setShowFilters(false)} className="w-8 h-8 hover:bg-stone-100 flex items-center justify-center" aria-label="Close filters">
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Sub-Categories</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between cursor-pointer"><span className="text-primary font-bold">Seasonal Fruits</span><span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 font-bold">18</span></li>
                <li className="flex items-center justify-between cursor-pointer"><span className="text-on-surface-variant hover:text-primary transition-colors">Leafy Greens</span><span className="bg-surface-container text-stone-500 text-[10px] px-2 py-0.5">22</span></li>
                <li className="flex items-center justify-between cursor-pointer"><span className="text-on-surface-variant hover:text-primary transition-colors">Root Vegetables</span><span className="bg-surface-container text-stone-500 text-[10px] px-2 py-0.5">14</span></li>
                <li className="flex items-center justify-between cursor-pointer"><span className="text-on-surface-variant hover:text-primary transition-colors">Organic Selection</span><span className="bg-surface-container text-stone-500 text-[10px] px-2 py-0.5">10</span></li>
              </ul>
            </div>

            <div className="bg-surface-container-low p-6 mt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Refine Search</h3>
              <div className="mb-6">
                <p className="text-xs font-bold mb-3">Price Range</p>
                <input className="w-full accent-primary" type="range" />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-stone-500"><span>₹0</span><span>₹500+</span></div>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold mb-3">Type</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm cursor-pointer"><input className="border-stone-300 text-primary focus:ring-primary" type="checkbox" defaultChecked /><span>Organic</span></label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer"><input className="border-stone-300 text-primary focus:ring-primary" type="checkbox" /><span>Fresh Arrivals</span></label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer"><input className="border-stone-300 text-primary focus:ring-primary" type="checkbox" /><span>Seasonal Picks</span></label>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold mb-3">Delivery Slot</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold cursor-pointer">Morning</span>
                  <span className="px-3 py-1 bg-white border border-stone-200 text-[10px] font-bold cursor-pointer hover:border-primary transition-colors">Afternoon</span>
                  <span className="px-3 py-1 bg-white border border-stone-200 text-[10px] font-bold cursor-pointer hover:border-primary transition-colors">Evening</span>
                </div>
              </div>
            </div>
          </aside>
        )}

        <div>
          <div className="flex justify-between items-center mb-8">
            <p className="text-stone-500 text-sm">Showing <span className="font-bold text-on-surface">{filteredProducts.length}</span> results for Fresh Produce</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const quantity = getQuantity(p.id);
            return (
              <Link key={p.id} href={`/product/${p.id}`} className="group bg-[#efefef] p-4 relative flex flex-col">
                <WishlistButton product={p} className="absolute top-3 right-3 z-10" />
                <div className="aspect-square bg-white overflow-hidden mb-4 p-2 flex items-center justify-center relative">
                  <Image alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={p.img} width={400} height={400} />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-semibold text-on-surface text-4 leading-tight mb-1">{p.name}</h3>
                  <p className="text-sm text-stone-600 mb-3">{p.weight}</p>
                  <p className="text-3xl font-bold text-on-surface mb-4">₹{p.price}</p>
                  <div className="mt-auto">
                    {quantity > 0 ? (
                      <div
                        className="h-11 border border-stone-400 bg-white flex items-center justify-between px-3"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      >
                        <button
                          onClick={(e) => handleRemoveFromCart(e, p)}
                          className="w-8 h-8 flex items-center justify-center text-primary"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="font-bold text-on-surface text-sm">{quantity}</span>
                        <button
                          onClick={(e) => handleAddToCart(e, p)}
                          className="w-8 h-8 flex items-center justify-center text-primary"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    ) : (
                      <button onClick={(e) => handleAddToCart(e, p)} className="h-11 w-full border border-stone-400 bg-white text-[#0f6483] font-bold text-xl">
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      </section>
    </div>
  );
}
