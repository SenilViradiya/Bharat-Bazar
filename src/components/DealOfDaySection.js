"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const DEAL_DURATION_MS = 12 * 60 * 60 * 1000;
const DEAL_ENDS_AT_KEY = "homeDealEndsAt";

function formatTime(ms) {
  const safeMs = Math.max(0, ms);
  const totalSeconds = Math.floor(safeMs / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours} : ${minutes} : ${seconds}`;
}

export default function DealOfDaySection() {
  const { addToCart, removeFromCart, getQuantity } = useCart();
  const [timeLeft, setTimeLeft] = useState(DEAL_DURATION_MS);

  const dealProducts = useMemo(
    () => ["p1", "p2", "p3", "p6"].map((id) => products.find((item) => item.id === id)).filter(Boolean),
    []
  );

  useEffect(() => {
    function getOrCreateDealEndTime() {
      const now = Date.now();
      const saved = Number(window.localStorage.getItem(DEAL_ENDS_AT_KEY));
      if (saved && saved > now) {
        return saved;
      }
      const newEndTime = now + DEAL_DURATION_MS;
      window.localStorage.setItem(DEAL_ENDS_AT_KEY, String(newEndTime));
      return newEndTime;
    }

    let endTime = getOrCreateDealEndTime();

    const update = () => {
      const now = Date.now();
      const remaining = endTime - now;
      if (remaining <= 0) {
        endTime = now + DEAL_DURATION_MS;
        window.localStorage.setItem(DEAL_ENDS_AT_KEY, String(endTime));
        setTimeLeft(DEAL_DURATION_MS);
        return;
      }
      setTimeLeft(remaining);
    };

    update();
    const timerId = window.setInterval(update, 1000);

    return () => window.clearInterval(timerId);
  }, []);

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
    <section className="mt-20 relative p-12 overflow-hidden bg-surface-container-low">
      <div className="harvest-glow absolute inset-0"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">
              Deal of the Day
            </h2>
            <p className="text-on-surface-variant">
              Exclusive prices for the next 12 hours
            </p>
          </div>
          <div className="flex gap-4 items-center bg-white p-2 shadow-sm">
            <div className="px-6 py-2 bg-tertiary text-on-tertiary font-bold tabular-nums">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-3 -mx-1 px-1">
          {dealProducts.map((product) => {
            const quantity = getQuantity(product.id);
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="min-w-[260px] max-w-[260px] bg-surface-container-lowest p-4 flex flex-col group relative"
              >
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`${product.badgeClass || "bg-secondary text-on-secondary"} text-[10px] font-bold px-2 py-1`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="aspect-square bg-surface-variant mb-4 overflow-hidden">
                  <Image
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={product.img}
                    width={400}
                    height={400}
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-xs text-on-surface-variant mb-4">{product.weight}</p>
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div>
                    {product.old && (
                      <span className="text-xs line-through text-on-surface-variant">{product.old}</span>
                    )}
                    <div className="text-2xl font-bold text-primary font-body flex items-baseline">
                      <span className="text-sm font-medium mr-1">₹</span>
                      {product.price}
                    </div>
                  </div>

                  {quantity > 0 ? (
                    <div className="h-10 border border-stone-400 bg-white flex items-center">
                      <button
                        onClick={(event) => handleRemove(event, product.id)}
                        className="w-9 h-9 flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                      <button
                        onClick={(event) => handleAdd(event, product)}
                        className="w-9 h-9 flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(event) => handleAdd(event, product)}
                      className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}