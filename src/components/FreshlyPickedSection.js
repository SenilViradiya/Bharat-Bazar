"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function FreshlyPickedSection() {
  const { addToCart, removeFromCart, getQuantity } = useCart();

  const freshlyPicked = useMemo(
    () => products.filter((item) => item.category === "fruits" || item.category === "vegetables").slice(0, 8),
    []
  );

  const handleAdd = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  const handleRemove = (event, productId) => {
    event.preventDefault();
    event.stopPropagation();
    removeFromCart(productId);
  };

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-2">
            Freshly Picked
          </h2>
          <p className="text-on-surface-variant">
            Harvested before dawn, delivered to your door by noon. Experience
            the true taste of Bharat&apos;s fields.
          </p>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-3 -mx-1 px-1">
        {freshlyPicked.map((item) => {
          const quantity = getQuantity(item.id);
          return (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="min-w-[190px] max-w-[190px] flex flex-col group"
            >
              <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden relative">
                <Image
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={item.img}
                  width={300}
                  height={375}
                />
                {item.filterCategory === "organic" && (
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 text-[10px] font-bold text-primary">
                    ORGANIC
                  </span>
                )}
              </div>

              <div className="px-1">
                <h4 className="font-bold text-on-surface">{item.name}</h4>
                <p className="text-xs text-on-surface-variant mb-2">{item.weight}</p>

                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-primary">₹{item.price}</span>

                  {quantity > 0 ? (
                    <div className="h-9 border border-stone-400 bg-white flex items-center">
                      <button
                        onClick={(event) => handleRemove(event, item.id)}
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-7 text-center font-bold text-sm">{quantity}</span>
                      <button
                        onClick={(event) => handleAdd(event, item)}
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(event) => handleAdd(event, item)}
                      className="w-9 h-9 bg-primary text-on-primary flex items-center justify-center"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}