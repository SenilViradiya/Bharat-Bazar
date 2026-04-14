"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrder } from "@/context/OrderContext";

function ThankYouPageContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { latestOrder, getOrderById } = useOrder();
  const order = orderId ? getOrderById(orderId) : latestOrder;

  if (!order) {
    return (
      <>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-16 min-h-[60vh]">
          <div className="bg-surface-container-lowest p-10 border border-surface-container-high text-center">
            <h1 className="text-3xl font-extrabold mb-3">No recent order found</h1>
            <p className="text-on-surface-variant mb-6">Place an order to see your confirmation details here.</p>
            <Link href="/cart" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 font-bold">
              Go to My Orders
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-surface-container-lowest border border-surface-container-high p-8 mb-8">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-bold">Order Confirmed</span>
              </div>
              <h1 className="text-3xl font-extrabold mb-2">Thank you for your order</h1>
              <p className="text-on-surface-variant">{order.estimatedMessage}</p>
              <p className="text-sm mt-4"><span className="font-bold">Order ID:</span> {order.id}</p>
              <p className="text-sm"><span className="font-bold">Payment:</span> {order.paymentMethod}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">Total Paid</p>
              <p className="text-4xl font-black">₹{order.totalAmount}</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest border border-surface-container-high p-8">
          <h2 className="text-xl font-extrabold mb-6">Ordered Products</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border border-surface-container-high p-3">
                <div className="w-16 h-16 bg-surface-variant overflow-hidden shrink-0">
                  <Image src={item.img} alt={item.name} width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div className="grow min-w-0">
                  <p className="font-bold truncate">{item.name}</p>
                  <p className="text-xs text-on-surface-variant">{item.weight}</p>
                  <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cart" className="bg-primary text-on-primary px-5 py-3 font-bold">Go to My Orders</Link>
            <Link href="/category" className="border border-surface-container-high px-5 py-3 font-bold">Continue Shopping</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-12 min-h-[60vh]">
            <section className="bg-surface-container-lowest border border-surface-container-high p-8 text-center">
              <p className="text-on-surface-variant">Loading your order details...</p>
            </section>
          </main>
          <Footer />
        </>
      }
    >
      <ThankYouPageContent />
    </Suspense>
  );
}
