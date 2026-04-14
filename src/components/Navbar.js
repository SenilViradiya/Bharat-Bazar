"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cartTotalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSearchPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-green-900 italic font-headline"
          >
            Organic Editorial
          </Link>
          <div className="hidden md:flex items-center gap-6 font-headline text-sm font-medium">
            <Link
              href="/category"
              className={`transition-colors cursor-pointer ${
                pathname === "/category"
                  ? "text-green-700 font-semibold border-b-2 border-green-700"
                  : "text-stone-600 hover:text-green-600"
              }`}
            >
              Grocery
            </Link>
            <Link
              href="/fruits-vegetables"
              className={`transition-colors cursor-pointer ${
                pathname === "/fruits-vegetables"
                  ? "text-green-700 font-semibold border-b-2 border-green-700"
                  : "text-stone-600 hover:text-green-600"
              }`}
            >
              Fresh Produce
            </Link>
            <Link
              href="/offers"
              className={`transition-colors cursor-pointer ${
                pathname === "/offers"
                  ? "text-green-700 font-semibold border-b-2 border-green-700"
                  : "text-stone-600 hover:text-green-600"
              }`}
            >
              Offers
            </Link>
            <Link
              href="/my-orders"
              className={`transition-colors cursor-pointer ${
                pathname === "/my-orders"
                  ? "text-green-700 font-semibold border-b-2 border-green-700"
                  : "text-stone-600 hover:text-green-600"
              }`}
            >
              My Orders
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <span className="hidden md:inline text-green-700 font-semibold border-b-2 border-green-700 cursor-pointer font-headline text-sm whitespace-nowrap">
            Location: Mumbai
          </span>
          <div className="flex items-center gap-4 text-green-800">
            <div className="relative" ref={searchContainerRef}>
              <button
                onClick={() => setShowSearchPanel((prev) => !prev)}
                aria-label="Toggle search"
                aria-expanded={showSearchPanel}
                className="w-9 h-9 border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
              {showSearchPanel && (
                <div className="absolute top-0 right-11 z-50 w-56 md:w-64 bg-white p-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
                    <input
                      autoFocus
                      className="w-full bg-transparent border-none focus:ring-0 text-sm"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button
                      onClick={() => setShowSearchPanel(false)}
                      aria-label="Close search"
                      className="text-on-surface-variant hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Link href="/wishlist" className="relative">
              <span className="material-symbols-outlined cursor-pointer hover:text-green-600 transition-colors">
                favorite
              </span>
              {wishlistCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 min-w-5 text-center"
                  style={{ borderRadius: "9999px" }}
                >
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <span className="material-symbols-outlined cursor-pointer hover:text-green-600 transition-colors">
                shopping_cart
              </span>
              {cartTotalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.5 min-w-5 text-center"
                  style={{ borderRadius: "9999px" }}
                >
                  {cartTotalItems}
                </span>
              )}
            </Link>
            <Link href="/login">
              <span className="material-symbols-outlined cursor-pointer hover:text-green-600 transition-colors">
                account_circle
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 h-px"></div>
    </nav>
  );
}
