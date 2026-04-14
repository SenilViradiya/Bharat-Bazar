"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: "home", label: "Home", href: "/", fillActive: true },
  { icon: "category", label: "Shop", href: "/category" },
  { icon: "favorite", label: "Wishlist", href: "/wishlist" },
  { icon: "local_offer", label: "Offers", href: "/offers" },
  { icon: "person", label: "Profile", href: "/login" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] px-6 py-4 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-primary" : "text-stone-400"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive && item.fillActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] ${isActive ? "font-bold" : ""}`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
