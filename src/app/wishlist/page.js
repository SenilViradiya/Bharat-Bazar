"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const items = Object.values(wishlistItems);

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-6 py-8 min-h-[60vh]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold">My Wishlist</h1>
          <p className="text-sm text-on-surface-variant">{items.length} saved items</p>
        </div>

        {items.length === 0 ? (
          <div className="border border-stone-200 bg-white p-8 text-center">
            <p className="text-on-surface-variant mb-4">Your wishlist is empty.</p>
            <Link href="/fruits-vegetables" className="px-5 py-2 bg-primary text-white font-semibold inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="bg-[#efefef] p-4 flex flex-col relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFromWishlist(p.id);
                  }}
                  className="absolute top-3 right-3 h-8 w-8 bg-transparent flex items-center justify-center text-primary"
                  aria-label="Remove from wishlist"
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </button>
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <Image alt={p.name} className="w-full h-full object-cover" src={p.img} width={320} height={320} />
                </div>
                <h3 className="text-2xl font-semibold mb-1">{p.name}</h3>
                <p className="text-lg text-on-surface-variant mb-2">{p.weight}</p>
                <p className="text-3xl font-bold mb-4">₹{p.price}</p>
                <span className="mt-auto border border-stone-400 text-center py-2 font-bold text-primary">View</span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
