"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrder } from "@/context/OrderContext";

export default function MyOrdersPage() {
  const { orders } = useOrder();

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">My Orders</h1>
          <Link href="/category" className="text-primary font-semibold">Continue Shopping</Link>
        </div>

        {orders.length === 0 ? (
          <div className="bg-surface-container-lowest p-10 border border-surface-container-high text-center">
            <span className="material-symbols-outlined text-6xl text-stone-300 mb-4 block">inventory_2</span>
            <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
            <p className="text-on-surface-variant mb-6">Once you place an order, it will appear here.</p>
            <Link href="/category" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 font-bold">
              Start Shopping
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <Link key={order.id} href={`/thank-you?orderId=${order.id}`} className="block bg-surface-container-lowest border border-surface-container-high p-5 hover:bg-surface-container-low transition-colors">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-bold text-lg">Order ID: {order.id}</p>
                    <p className="text-xs text-on-surface-variant">{new Date(order.createdAt).toLocaleString()}</p>
                    <p className="text-xs text-primary mt-1">{order.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant">Items: {order.items.length}</p>
                    <p className="font-extrabold text-xl">₹{order.totalAmount}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
