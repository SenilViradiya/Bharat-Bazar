import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryProductGrid from "@/components/CategoryProductGrid";

export const metadata = {
  title: "Grocery & Staples | The Organic Editorial",
  description: "Sustainably sourced, traditionally milled staples for your kitchen.",
};

export default function CategoryPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto min-h-screen">
        <main className="p-6 md:p-10">
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-2">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-green-800 font-semibold">Grocery &amp; Staples</span>
            </div>
            <h1 className="text-4xl font-extrabold text-on-background tracking-tight">Atta, Rice &amp; Dal</h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl">Sustainably sourced, traditionally milled staples for your kitchen. Direct from local agrarian cooperatives.</p>
          </div>

          <CategoryProductGrid />

        </main>
      </div>
      <Footer />
    </>
  );
}
