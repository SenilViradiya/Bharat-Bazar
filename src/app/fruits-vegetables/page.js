import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreshCategoryProductGrid from "@/components/FreshCategoryProductGrid";

export const metadata = {
  title: "Fruits & Vegetables | The Organic Editorial",
  description: "Farm-fresh fruits and vegetables sourced daily for your home.",
};

export default function FruitsVegetablesPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto min-h-screen">
        <main className="p-6 md:p-10">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-2">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-green-800 font-semibold">Fresh Produce</span>
            </div>
            <h1 className="text-4xl font-extrabold text-on-background tracking-tight">Fruits &amp; Vegetables</h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl">Farm-fresh produce curated daily from trusted growers. Pick your seasonal favorites and get them delivered quickly.</p>
          </div>

          <FreshCategoryProductGrid />
        </main>
      </div>
      <Footer />
    </>
  );
}
