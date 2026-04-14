"use client";

import Image from "next/image";
import Link from "next/link";

const dealProducts = [
  { id: "f1", name: "Organic Royal Gala Apples", cat: "FRESH PRODUCE", weight: "500g", old: "₹180", price: "126", badge: "30% OFF", badgeClass: "bg-error text-white", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7oIhOXW5ZMVOqsfyWIcFCkTtlJDrD1G1zXGf2gbaITj1D7YUoT7kBxUZT8RCCsM7wzY0mFKtFeAIAmgM4kpQ8VtfFHpU7KI3cnFfSnKPJoeN_xFuDWn87EKvzeQsf63Sd0VBH2vObmZk1EasSjhUM-2zTK6kaKDy0VYije6gGFozdP5S8E9fQQgNagZ8J7SHhCed2y-On5YFLk0C8j22XSSj8A9W4_aBkp3I8bQqbSlw6vgksmKju64ofG4sA9B4fKPCrlfhZ5M" },
  { id: "p6", name: "Wild Forest Organic Honey", cat: "STAPLES", weight: "250g", old: "₹350", price: "300", badge: "SAVE ₹50", badgeClass: "bg-tertiary text-white", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWQM7U1wPB2D6XpU-RxxaVLgWzHJEfPsFY0MPP8M_J_w4ymeqNzSD-HNv_99s71sPouZLG-77FNEzbSxlAIrlqkdc5Mga3_Bdcp9R5TD9kMtt3-SsxLMe-wAxc9w8HuS7nmSM6SPFkp5EInsISBA9D7UsSAG8OENk6cPG0lhGtB_UrTtXYXMMz6P18LN644OIQjHJcUw5-fSxFrEakDsPGs7yrR0e0v-tPkgVXtxMgAVH15jI7218C9ngPGV68SVIDzkmrtpNC3w" },
  { id: "p3", name: "Premium White Quinoa", cat: "GRAINS", weight: "500g", old: "₹450", price: "225", badge: "BOGO", badgeClass: "bg-secondary text-white", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6xNJZrYnRLblRi4kJARHTioxkMU0oJt7Coa6j5uxkeofXzWObRpezmxOYWQ0FOjGgqsnh_EMx-tN90JEJd2731rOOjAEt5Rm1YQJG8kwvY6swDxCTAkF4wWQe2zRaki2diDlL_BRMD8EPk2TPBFVKer4VeOrIAbbhxgRVbX_N8_jvKoK9y34a2KjydBIoYmp1f7D7VXImeV33xw-0YkoXI13ZGup2eouEvx4rdysR-wvp69koH3LyNeuxi4h2JXgOpZ4JlqWUYs" },
  { id: "f8", name: "Hass Avocado (Imported)", cat: "IMPORT FRESH", weight: "1 Unit", old: "₹249", price: "149", badge: "LOWEST PRICE", badgeClass: "bg-error text-white", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO0joJnDKBCMIPEu5D7eQqNOT1bYc8l4-wh_9na6VWDRN2rgIfSnm4SnnJyYHVqV42mL29iGOKbehoDVD58OImdmWXtOHJQ0wwAuPooLUskVEyUCy8M5Q6SAsaoquldaYDbF-KZ8K7osU9U_QG-Sg6dBIR3S3O_OB8yRa6jZOYey0FixOZQndTlAT3PtjoHM8jaxn8jZNW6xDj7neZ5kX0W9qVh3M4WiD9-TzYiXux3GgrjHMNDOP-MMF8nYj33SscpRd5BEzzgwU" },
  { id: "p2", name: "Unsweetened Almond Milk", cat: "DAIRY ALTERNATIVES", weight: "1 Litre", old: "₹320", price: "240", badge: "NEW DEAL", badgeClass: "bg-tertiary text-white", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIoXIB0NsgbNWaZfEEYBsRl-ubTFpxF73uMF2to8BFJec1zcchBHxf03eq8AUD4gfYI8K05ylPRZyTlQe6LWIP10f6mREdLTfge9UlTlbJWHcdl96cUPkfRo0c-RKSZRnyI98I_h1qPV8Qq04yUShEQyR5-2SnFodo1C5fJ3CABITxvPkNE3IFCJzf8HQlygV1zFeF9VkCrDSZecrEsIZljOVeP6YSKzkdzQCg3c8dUhF_gr_L7nfyIZ8H-i6QaNDMSMIc-1do8JU" },
];

const heroOffers = [
  {
    title: "Deals Of The Day",
    subtitle: "Daily essentials at lowest prices",
    cta: "Shop Now",
    discount: "Up to 50% Off",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_jXIB2IjhFHvUiAnP2hGyxwAFMkmGL-vJ6Tio1xosv-S4lWMxxUB1Z70AidAr-sYdWSVjoADLLAJaOPmem2-5Do5wb-_smqAqlp6_b0SceXi6Aq4fv0riWbJk8go_5IU_dNM4BYPsAJ9U-YMVnpl5_sE5ZBIGxeG3vdKYwcIm0ipGhR9LZ5PJJaFDE7c3Rmds4kI-CGGAfD_NiNbqwBXGTERTgQulOKYJ3NiL1u-tcwYExpdd_Dur5uRQqkbLFqx7XPcv6HHxLCw",
  },
  {
    title: "Weekend Mega Offers",
    subtitle: "Stock up your pantry and save more",
    cta: "Grab Deals",
    discount: "Flat 40% Off",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWQM7U1wPB2D6XpU-RxxaVLgWzHJEfPsFY0MPP8M_J_w4ymeqNzSD-HNv_99s71sPouZLG-77FNEzbSxlAIrlqkdc5Mga3_Bdcp9R5TD9kMtt3-SsxLMe-wAxc9w8HuS7nmSM6SPFkp5EInsISBA9D7UsSAG8OENk6cPG0lhGtB_UrTtXYXMMz6P18LN644OIQjHJcUw5-fSxFrEakDsPGs7yrR0e0v-tPkgVXtxMgAVH15jI7218C9ngPGV68SVIDzkmrtpNC3w",
  },
  {
    title: "Summer Savings",
    subtitle: "Cool drinks, fruits, and quick snacks",
    cta: "Explore",
    discount: "Save Up To 50%",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPQeYt6jAblQ-attX5WOXe_NrD700KKwStvwP7UoMTX1zhPwzLNXNZiyDfHtuwRqy5L33lnBXuWjZQ2k_ZsdicMrL6UP271zKdMVK8OUU6sHBdCJLoIfB1ZNSB-9zoRkyHXnam6jltjFvoLXRL9rpBMnFQVLnq7YsfSwnXOXiLp3y6D_7T4WAzvIEGUwgjfzuFE6tbt8avNqSP8SLBGF9P-8yTSwesaDSOi7rxI--LWAkDOeW4TIYAVzdVOnOXTbFHAnbjdpcVhzE",
  },
  {
    title: "Fresh Pick Flash",
    subtitle: "Limited-time fruits and vegetables",
    cta: "Shop Flash",
    discount: "Up to 35% Off",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7oIhOXW5ZMVOqsfyWIcFCkTtlJDrD1G1zXGf2gbaITj1D7YUoT7kBxUZT8RCCsM7wzY0mFKtFeAIAmgM4kpQ8VtfFHpU7KI3cnFfSnKPJoeN_xFuDWn87EKvzeQsf63Sd0VBH2vObmZk1EasSjhUM-2zTK6kaKDy0VYije6gGFozdP5S8E9fQQgNagZ8J7SHhCed2y-On5YFLk0C8j22XSSj8A9W4_aBkp3I8bQqbSlw6vgksmKju64ofG4sA9B4fKPCrlfhZ5M",
  },
  {
    title: "Smart Grocery Combos",
    subtitle: "Monthly basket packs at better value",
    cta: "View Combo",
    discount: "Save ₹250",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIoXIB0NsgbNWaZfEEYBsRl-ubTFpxF73uMF2to8BFJec1zcchBHxf03eq8AUD4gfYI8K05ylPRZyTlQe6LWIP10f6mREdLTfge9UlTlbJWHcdl96cUPkfRo0c-RKSZRnyI98I_h1qPV8Qq04yUShEQyR5-2SnFodo1C5fJ3CABITxvPkNE3IFCJzf8HQlygV1zFeF9VkCrDSZecrEsIZljOVeP6YSKzkdzQCg3c8dUhF_gr_L7nfyIZ8H-i6QaNDMSMIc-1do8JU",
  },
  {
    title: "Premium Grains Week",
    subtitle: "Rice, quinoa and millet specials",
    cta: "Start Saving",
    discount: "Buy 2 Get 1",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6xNJZrYnRLblRi4kJARHTioxkMU0oJt7Coa6j5uxkeofXzWObRpezmxOYWQ0FOjGgqsnh_EMx-tN90JEJd2731rOOjAEt5Rm1YQJG8kwvY6swDxCTAkF4wWQe2zRaki2diDlL_BRMD8EPk2TPBFVKer4VeOrIAbbhxgRVbX_N8_jvKoK9y34a2KjydBIoYmp1f7D7VXImeV33xw-0YkoXI13ZGup2eouEvx4rdysR-wvp69koH3LyNeuxi4h2JXgOpZ4JlqWUYs",
  },
];

const couponCards = [
  {
    title: "ORGANIC100",
    detail: "Flat ₹100 off above ₹999",
    helper: "Valid once per user",
  },
  {
    title: "FRESH30",
    detail: "30% off on fresh produce",
    helper: "Up to ₹150 discount",
  },
  {
    title: "BULK20",
    detail: "20% off on 5+ items",
    helper: "Grocery category only",
  },
  {
    title: "SAVEBANK10",
    detail: "Extra 10% bank discount",
    helper: "Selected cards",
  },
];

export default function OffersPageClient() {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 pb-24 overflow-x-hidden">
      <section className="mt-6 bg-[#ececec] p-4 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-on-surface">Top Offers</h1>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <p className="text-on-surface-variant text-sm">Swipe left/right to browse offers</p>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 snap-x snap-mandatory scroll-smooth touch-pan-x -mx-1 px-1">
            {heroOffers.map((offer) => (
              <article key={offer.title} data-hero-offer className="snap-start shrink-0 basis-full md:basis-1/2 lg:basis-1/3 bg-white border border-stone-200 overflow-hidden relative min-h-64">
                <Image alt={offer.title} className="absolute inset-0 w-full h-full object-cover" src={offer.img} width={900} height={450} />
                <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 text-red-600 px-3 py-1 font-extrabold text-sm">{offer.discount}</div>
                <div className="absolute left-5 bottom-5 text-white max-w-[75%]">
                  <h3 className="text-2xl font-extrabold mb-1 leading-tight">{offer.title}</h3>
                  <p className="text-sm text-white/90 mb-3">{offer.subtitle}</p>
                  <button className="bg-white text-red-600 font-bold px-4 py-2 text-sm">{offer.cta}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl font-bold italic text-green-900">Today&apos;s Lowest Prices</h2>
          <Link href="/category" className="text-primary font-bold flex items-center gap-1 hover:underline">
            Explore All <span className="material-symbols-outlined text-sm">chevron_right</span>
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-3 touch-pan-x -mx-1 px-1">
          {dealProducts.map((p) => (
            <Link key={p.name} href={`/product/${p.id}`} className="min-w-55 max-w-55 bg-[#efefef] p-3 flex flex-col relative group shrink-0">
              <div className="absolute top-2 left-2 z-10">
                <span className={`${p.badgeClass} text-[10px] font-bold px-2 py-1 uppercase tracking-tight`}>{p.badge}</span>
              </div>
              <div className="w-full aspect-square bg-white overflow-hidden mb-3 relative">
                <Image alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={p.img} width={400} height={400} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-stone-500 font-medium mb-1">{p.cat}</p>
                <h4 className="font-semibold text-on-surface text-base mb-1 line-clamp-1">{p.name}</h4>
                <p className="text-xs text-stone-500 mb-2">{p.weight}</p>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 line-through text-xs">{p.old}</span>
                  <span className="text-2xl font-bold text-on-surface">₹{p.price}</span>
                </div>
              </div>
              <button className="h-10 mt-4 border border-stone-400 bg-white text-[#0f6483] font-bold">Add</button>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Coupons & Bank Offers</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-3 touch-pan-x -mx-1 px-1">
          {couponCards.map((coupon) => (
            <article key={coupon.title} className="min-w-65 max-w-65 bg-on-background text-white p-5 shrink-0">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Coupon</p>
              <h3 className="text-2xl font-extrabold mb-2">{coupon.title}</h3>
              <p className="text-sm text-stone-200 mb-4">{coupon.detail}</p>
              <p className="text-xs text-stone-400 mb-4">{coupon.helper}</p>
              <button className="border border-stone-500 px-4 py-2 text-xs font-bold">Apply</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
