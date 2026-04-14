"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("orders");
      if (stored) {
        setOrders(JSON.parse(stored));
      }
    } catch {
      setOrders([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("orders", JSON.stringify(orders));
    } catch {
      // Ignore storage write errors.
    }
  }, [orders]);

  const createOrder = (orderPayload) => {
    const orderId = `ORD-${Date.now().toString().slice(-8)}`;
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      status: "Placed",
      estimatedMessage: "Your order will be delivered shortly",
      ...orderPayload,
    };

    setOrders((prev) => [order, ...prev]);
    return order;
  };

  const getOrderById = (id) => orders.find((order) => order.id === id) || null;

  const latestOrder = useMemo(() => orders[0] || null, [orders]);

  return (
    <OrderContext.Provider value={{ orders, createOrder, getOrderById, latestOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
