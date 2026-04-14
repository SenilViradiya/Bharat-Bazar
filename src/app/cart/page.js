"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, removeItemFromCart, cartTotalItems } = useCart();

  const cartEntries = Object.values(cartItems);

  const parseAmount = (amount) => Number(String(amount || "0").replace(/[^\d.]/g, "")) || 0;

  const totalMrp = cartEntries.reduce((sum, item) => {
    const oldPrice = item.old ? parseAmount(item.old) : parseAmount(item.price);
    return sum + oldPrice * item.quantity;
  }, 0);

  const totalSellingPrice = cartEntries.reduce((sum, item) => sum + parseAmount(item.price) * item.quantity, 0);
  const discount = Math.max(totalMrp - totalSellingPrice, 0);
  const deliveryCharges = cartEntries.length > 0 ? 40 : 0;
  const finalAmount = totalSellingPrice;

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="grow space-y-6">
            <div className="flex items-end justify-between">
              <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Your Harvest Basket</h1>
              {cartTotalItems > 0 && <span className="text-sm text-on-surface-variant font-medium">({cartTotalItems} Items Selected)</span>}
            </div>

            {cartEntries.length === 0 ? (
              <div className="bg-surface-container-lowest  p-10 text-center">
                <span className="material-symbols-outlined text-6xl text-stone-300 mb-4 block">shopping_cart</span>
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-on-surface-variant mb-6">Add fresh products to start your order.</p>
                <Link href="/category" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3  font-bold">
                  Continue Shopping
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartEntries.map((item) => (
                  <div key={item.id} className="bg-surface-container-lowest  p-4 flex gap-6 items-center transition-all duration-200 hover:bg-surface-container-low group">
                    <div className="w-32 h-32  overflow-hidden bg-surface-variant shrink-0">
                      <Image className="w-full h-full object-cover" src={item.img} alt={item.name} width={128} height={128} />
                    </div>
                    <div className="grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        {item.badge && <span className={`${item.badgeClass} text-[10px] px-2 py-0.5  font-bold tracking-wide`}>{item.badge}</span>}
                        <h3 className="text-lg font-bold text-on-surface mt-1">{item.name}</h3>
                        <p className="text-sm text-on-surface-variant">{item.weight}</p>
                        <div className="mt-3 flex items-center gap-1">
                          <span className="text-sm font-body text-on-surface-variant">₹</span>
                          <span className="text-xl font-bold font-body">{item.price}</span>
                          {item.old && <span className="text-xs text-on-surface-variant line-through ml-2">{item.old}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center bg-secondary-container  px-3 py-1.5">
                          <button onClick={() => removeFromCart(item.id)} className="material-symbols-outlined text-on-secondary-container text-lg cursor-pointer">remove</button>
                          <span className="mx-4 font-bold text-on-secondary-container">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="material-symbols-outlined text-on-secondary-container text-lg cursor-pointer">add</button>
                        </div>
                        <button onClick={() => removeItemFromCart(item.id)} className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Summary */}
          {cartEntries.length > 0 && <div className="lg:w-100 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest  p-6 shadow-sm">
                <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">receipt_long</span>
                  Price Details
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm"><span className="text-on-surface-variant">Total MRP ({cartTotalItems} items)</span><span className="font-medium">₹{totalMrp}</span></div>
                  <div className="flex justify-between items-center text-sm"><span className="text-on-surface-variant">Store Discount</span><span className="text-primary font-bold">-₹{discount}</span></div>
                  <div className="flex justify-between items-center text-sm"><span className="text-on-surface-variant">Coupon (FRESH20)</span><span className="text-primary font-bold">-₹0</span></div>
                  <div className="flex justify-between items-center text-sm"><span className="text-on-surface-variant">Delivery Charges</span>
                    <div className="flex items-center gap-2"><span className="line-through text-on-surface-variant">₹{deliveryCharges}</span><span className="text-primary font-bold uppercase text-[10px] tracking-widest">Free</span></div>
                  </div>
                  <div className="h-px bg-surface-container-high my-2"></div>
                  <div className="flex justify-between items-end py-2">
                    <span className="font-bold text-lg">Total Amount</span>
                    <div className="text-right">
                      <div className="flex items-baseline justify-end gap-1">
                        <span className="text-sm font-bold text-on-surface-variant">₹</span>
                        <span className="text-3xl font-extrabold text-on-surface leading-none">{finalAmount}</span>
                      </div>
                      <p className="text-[10px] text-primary font-bold mt-1">You save ₹{discount} on this order</p>
                    </div>
                  </div>
                </div>
                <Link href="/checkout" className="w-full mt-8 py-4 bg-primary text-on-primary  font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Place Order <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              {/* Trust Signal */}
              <div className="bg-secondary-container/10  p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary  flex items-center justify-center text-on-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-secondary-container">Express Delivery Guaranteed</h4>
                  <p className="text-[10px] text-on-secondary-container/70">Your order will arrive within 2 hours</p>
                </div>
              </div>

              {/* Coupon */}
              <div className="bg-surface-container-high/50  p-1 flex items-center focus-within:ring-2 ring-primary transition-all">
                <input className="grow bg-transparent border-none text-sm font-medium px-4 focus:ring-0" placeholder="Enter Coupon Code" type="text" />
                <button className="px-6 py-2.5 bg-surface-container-lowest text-primary text-xs font-bold  uppercase tracking-wider">Apply</button>
              </div>
            </div>
          </div>}
        </div>
      </main>
      <Footer />
    </>
  );
}
