"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowWhenCartHasItems from "@/components/ShowWhenCartHasItems";
import { useCart } from "@/context/CartContext";

export default function CheckoutPageClient() {
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState("home");
  const { cartItems, cartTotalItems } = useCart();

  const cartEntries = Object.values(cartItems);
  const parseAmount = (amount) => Number(String(amount || "0").replace(/[^\d.]/g, "")) || 0;
  const totalMrp = cartEntries.reduce((sum, item) => {
    const oldPrice = item.old ? parseAmount(item.old) : parseAmount(item.price);
    return sum + oldPrice * item.quantity;
  }, 0);
  const subtotal = cartEntries.reduce((sum, item) => sum + parseAmount(item.price) * item.quantity, 0);
  const discount = Math.max(totalMrp - subtotal, 0);
  const totalAmount = subtotal;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto mb-16 px-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-highest -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-primary -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10  bg-primary text-on-primary flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-xs font-bold tracking-wide text-primary uppercase">Address</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10  bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-xs font-bold tracking-wide text-on-surface-variant uppercase">Payment</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10  bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-sm">3</div>
              <span className="text-xs font-bold tracking-wide text-on-surface-variant uppercase">Confirm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">Delivery Address</h2>
                <button
                  onClick={() => setShowNewAddressForm(true)}
                  disabled={showNewAddressForm}
                  className={`text-primary font-semibold text-sm flex items-center gap-1 ${showNewAddressForm ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add New Address
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onClick={() => setSelectedAddressType("home")}
                  className={`p-6 bg-surface-container-lowest border-2 shadow-sm relative cursor-pointer transition-all ${selectedAddressType === "home" ? "border-primary" : "border-transparent"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-primary-fixed-dim text-on-primary-fixed text-[10px] px-2 py-0.5  font-bold uppercase tracking-wider">Home</span>
                    {selectedAddressType === "home" && (
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">Manav Patel</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">402, Green Meadows, Silver Oak Society,<br />Powai, Mumbai, Maharashtra - 400076</p>
                  <p className="text-on-surface-variant text-sm font-medium">+91 98765 43210</p>
                </div>
                <div
                  onClick={() => setSelectedAddressType("work")}
                  className={`p-6 bg-surface-container-low hover:bg-surface-container-highest transition-colors cursor-pointer border-2 ${selectedAddressType === "work" ? "border-primary" : "border-transparent"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-0.5  font-bold uppercase tracking-wider">Work</span>
                    {selectedAddressType === "work" && (
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">Manav Patel</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">WeWork Spectrum, Tower B, 12th Floor,<br />Vikhroli, Mumbai, Maharashtra - 400083</p>
                  <p className="text-on-surface-variant text-sm font-medium">+91 98765 43210</p>
                </div>
              </div>
            </section>

            {showNewAddressForm && (
              <section className="bg-surface-container-lowest  p-8 shadow-sm border border-outline-variant/10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold">Add a New Location</h2>
                  <button
                    onClick={() => setShowNewAddressForm(false)}
                    className="text-sm font-semibold text-on-surface-variant hover:text-primary"
                  >
                    Cancel
                  </button>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                      <input className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Mobile Number</label>
                      <input className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="+91 00000 00000" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Address Line 1</label>
                    <input className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Flat No., House Name, Street" type="text" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Pin Code</label>
                      <input className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="000 000" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">City</label>
                      <input className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Mumbai" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">State</label>
                      <select className="w-full bg-surface-container-low border-none  p-4 text-sm focus:ring-2 focus:ring-primary outline-none appearance-none">
                        <option>Maharashtra</option><option>Karnataka</option><option>Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input className="w-5 h-5  border-outline-variant text-primary focus:ring-primary" id="default-addr" type="checkbox" />
                    <label className="text-sm font-medium text-on-surface-variant" htmlFor="default-addr">Make this my default delivery address</label>
                  </div>
                </form>
              </section>
            )}
          </div>

          <ShowWhenCartHasItems>
            <aside className="lg:col-span-4 sticky top-24">
              <div className="bg-surface-container-lowest  overflow-hidden shadow-sm">
                <div className="p-6 bg-primary-container text-on-primary-container">
                  <h2 className="text-lg font-bold font-headline">Order Summary</h2>
                  <p className="text-xs opacity-80 mt-1">Sustainably sourced, freshly packed.</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    {cartEntries.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-surface-variant shrink-0 overflow-hidden">
                          <Image className="w-full h-full object-cover" src={item.img} alt={item.name} width={64} height={64} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold">{item.name}</h4>
                          <p className="text-xs text-on-surface-variant">{item.weight}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs font-medium">Qty: {item.quantity}</span>
                            <span className="text-sm font-bold text-primary">₹{parseAmount(item.price) * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-surface-container-high pt-6 space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Total MRP ({cartTotalItems} items)</span><span className="font-medium">₹{totalMrp}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Store Discount</span><span className="text-primary font-medium">-₹{discount}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Delivery Fee</span><span className="text-secondary font-medium">FREE</span></div>
                    <div className="flex justify-between pt-4 border-t border-surface-container-high">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-extrabold text-on-surface">₹{totalAmount}</span>
                    </div>
                  </div>
                  <Link href="/payment" className="w-full bg-primary text-on-primary py-4  font-bold text-base shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    Proceed to Payment <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-surface-container-high">
                    <div className="flex items-center gap-1 opacity-60"><span className="material-symbols-outlined text-sm">verified_user</span><span className="text-[10px] font-bold uppercase tracking-tighter">Secure Checkout</span></div>
                    <div className="flex items-center gap-1 opacity-60"><span className="material-symbols-outlined text-sm">eco</span><span className="text-[10px] font-bold uppercase tracking-tighter">Sustainably Packed</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-tertiary-fixed/20 p-4  flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary">local_offer</span>
                <div>
                  <p className="text-xs font-bold text-tertiary">Harvest Special</p>
                  <p className="text-[11px] text-on-tertiary-fixed-variant leading-tight">Get extra ₹50 OFF on orders above ₹1000. Keep shopping!</p>
                </div>
              </div>
            </aside>
          </ShowWhenCartHasItems>
        </div>
      </main>
      <Footer />
    </>
  );
}
