"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import ShowWhenCartHasItems from "@/components/ShowWhenCartHasItems";
import { useCart } from "@/context/CartContext";
import { useOrder } from "@/context/OrderContext";

export default function PaymentPageClient() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi-phonepe");
  const { cartItems, cartTotalItems, clearCart } = useCart();
  const { createOrder } = useOrder();
  const cartEntries = Object.values(cartItems);

  const upiMethods = [
    { id: "upi-gpay", title: "Google Pay" },
    { id: "upi-phonepe", title: "PhonePe" },
    { id: "upi-paytm", title: "Paytm" },
  ];

  const otherMethods = [
    { id: "card", icon: "credit_card", title: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay & more" },
    { id: "netbanking", icon: "account_balance", title: "Net Banking", desc: "Select from all Indian banks" },
    { id: "cod", icon: "local_shipping", title: "Cash on Delivery", desc: "Pay when your order arrives" },
  ];

  const parseAmount = (amount) => Number(String(amount || "0").replace(/[^\d.]/g, "")) || 0;
  const totalMrp = cartEntries.reduce((sum, item) => {
    const oldPrice = item.old ? parseAmount(item.old) : parseAmount(item.price);
    return sum + oldPrice * item.quantity;
  }, 0);
  const subtotal = cartEntries.reduce((sum, item) => sum + parseAmount(item.price) * item.quantity, 0);
  const discount = Math.max(totalMrp - subtotal, 0);
  const handlingCharges = cartEntries.length > 0 ? 15 : 0;
  const totalAmount = subtotal + handlingCharges;

  const selectedMethodLabel = (() => {
    const upi = upiMethods.find((m) => m.id === selectedPaymentMethod);
    if (upi) return upi.title;
    const other = otherMethods.find((m) => m.id === selectedPaymentMethod);
    return other ? other.title : "Payment Method";
  })();

  const renderUpiLogo = (id) => {
    if (id === "upi-gpay") {
      return (
        <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.239 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.417 4.337-17.694 10.691z"/>
            <path fill="#4CAF50" d="M24 44c5.167 0 9.86-1.977 13.409-5.197l-6.191-5.238C29.141 35.091 26.715 36 24 36c-5.219 0-9.621-3.317-11.283-7.946l-6.522 5.025C9.433 39.556 16.227 44 24 44z"/>
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.085 5.565l.003-.002 6.191 5.238C36.971 39.201 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
          </svg>
        </div>
      );
    }

    if (id === "upi-phonepe") {
      return (
        <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center">
          <div className="w-8 h-8 bg-[#5f259f] text-white flex items-center justify-center text-sm font-extrabold">
            पे
          </div>
        </div>
      );
    }

    return (
      <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center">
        <div className="text-[11px] font-extrabold tracking-tight">
          <span className="text-[#00baf2]">pay</span><span className="text-[#002970]">tm</span>
        </div>
      </div>
    );
  };

  const handlePlaceOrder = () => {
    if (cartEntries.length === 0) return;

    const createdOrder = createOrder({
      paymentMethod: selectedMethodLabel,
      totalMrp,
      discount,
      handlingCharges,
      totalAmount,
      items: cartEntries.map((item) => ({
        id: item.id,
        name: item.name,
        weight: item.weight,
        img: item.img,
        quantity: item.quantity,
        price: parseAmount(item.price),
      })),
    });

    clearCart();
    router.push(`/thank-you?orderId=${createdOrder.id}`);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold tracking-tight text-green-900 italic font-headline">
            Organic Editorial
          </Link>
          <div className="flex items-center gap-2 text-stone-500 font-medium text-sm">
            <span className="material-symbols-outlined text-green-800">lock</span>
            Secure Checkout
          </div>
        </div>
        <div className="bg-stone-100 h-px"></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">Select Payment Method</h1>
              <p className="text-on-surface-variant text-lg">Choose your preferred way to complete the transaction.</p>
            </div>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-on-surface">UPI Options</h2>
                <span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5  font-bold tracking-wider">POPULAR</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upiMethods.map((method) => {
                  const isSelected = selectedPaymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`cursor-pointer group p-5 bg-surface-container-lowest border-2 transition-all flex flex-col items-center gap-3 relative ${isSelected ? "border-primary" : "border-transparent hover:border-primary"}`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                      )}
                      {renderUpiLogo(method.id)}
                      <span className="font-bold text-sm">{method.title}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold text-on-surface">Other Methods</h2>
              <div className="bg-surface-container-lowest  overflow-hidden">
                {otherMethods.map((m, i) => {
                  const isSelected = selectedPaymentMethod === m.id;
                  return (
                  <button
                    key={m.title}
                    onClick={() => setSelectedPaymentMethod(m.id)}
                    className={`w-full p-6 ${i < 2 ? "border-b border-surface-container-low" : ""} flex items-center gap-4 cursor-pointer transition-colors ${isSelected ? "bg-surface-container-low" : "hover:bg-surface-container-low"}`}
                  >
                    <span className="material-symbols-outlined text-on-surface-variant">{m.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold">{m.title}</p>
                      <p className="text-xs text-on-surface-variant">{m.desc}</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">{isSelected ? "check_circle" : "chevron_right"}</span>
                  </button>
                )})}
              </div>

              {selectedPaymentMethod === "card" && (
                <div className="bg-surface-container-lowest p-5 border border-surface-container-high space-y-4">
                  <p className="text-sm font-bold">Enter Card Details</p>
                  <input className="w-full bg-surface-container-low border-none p-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Card Number" type="text" />
                  <div className="grid grid-cols-2 gap-3">
                    <input className="w-full bg-surface-container-low border-none p-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="MM/YY" type="text" />
                    <input className="w-full bg-surface-container-low border-none p-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="CVV" type="password" />
                  </div>
                </div>
              )}

              {selectedPaymentMethod === "netbanking" && (
                <div className="bg-surface-container-lowest p-5 border border-surface-container-high space-y-4">
                  <p className="text-sm font-bold">Select Bank</p>
                  <select className="w-full bg-surface-container-low border-none p-3 text-sm focus:ring-2 focus:ring-primary outline-none">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              {selectedPaymentMethod === "cod" && (
                <div className="bg-surface-container-lowest p-5 border border-surface-container-high">
                  <p className="text-sm font-bold mb-2">Cash on Delivery Selected</p>
                  <p className="text-xs text-on-surface-variant">Pay with cash when your order is delivered. Keep exact change ready for faster handover.</p>
                </div>
              )}
            </section>

            <div className="pt-8 flex flex-wrap items-center justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { icon: "verified_user", text: "Verified by Visa" },
                { icon: "shield", text: "PCI-DSS Compliant" },
                { icon: "lock_reset", text: "256-Bit SSL Encryption" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">{b.icon}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <ShowWhenCartHasItems>
            <aside className="lg:col-span-5 sticky top-28">
              <div className="bg-surface-container-lowest  p-8 shadow-sm">
                <h2 className="text-xl font-extrabold text-on-surface mb-6">Order Summary</h2>

                <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-1">
                  {cartEntries.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <div className="w-14 h-14 bg-surface-variant overflow-hidden shrink-0">
                        <Image src={item.img} alt={item.name} width={56} height={56} className="w-full h-full object-cover" />
                      </div>
                      <div className="grow min-w-0">
                        <p className="text-sm font-bold truncate">{item.name}</p>
                        <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-bold">₹{parseAmount(item.price) * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-on-surface-variant"><span>Subtotal ({cartTotalItems} items)</span><span>₹ {totalMrp}</span></div>
                  <div className="flex justify-between text-on-surface-variant"><span>Store Discount</span><span className="text-primary font-medium">- ₹ {discount}</span></div>
                  <div className="flex justify-between text-on-surface-variant"><span>Handling Charges</span><span>₹ {handlingCharges}</span></div>
                </div>
                <div className="border-t-2 border-dashed border-surface-container-high py-6 mb-8 flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Amount</p>
                    <h3 className="text-4xl font-black text-on-surface leading-none mt-1">
                      <span className="text-base align-top font-bold mr-1">₹</span>{totalAmount}
                    </h3>
                  </div>
                  <p className="text-xs text-primary font-bold">You saved ₹{discount}!</p>
                </div>
                <button onClick={handlePlaceOrder} className="w-full bg-primary text-on-primary py-4  font-bold text-lg hover:bg-primary-container transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  Pay with {selectedMethodLabel} ₹{totalAmount} <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-6 leading-relaxed">
                  By completing your purchase you agree to our <br />
                  <span>Terms of Service</span> and <span>Refund Policy</span>.
                </p>
              </div>

              <div className="mt-6 p-6  relative overflow-hidden bg-linear-to-br from-tertiary/5 to-tertiary-fixed/30 border border-tertiary-fixed-dim/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    <h4 className="font-bold text-tertiary">Editorial Perks</h4>
                  </div>
                  <p className="text-sm text-on-tertiary-fixed-variant leading-relaxed">
                    You&apos;ll earn <strong>{Math.floor(totalAmount / 10)} FreshPoints</strong> with this order. Use them for discounts on your next harvest!
                  </p>
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
