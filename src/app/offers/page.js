import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import OffersPageClient from "@/components/OffersPageClient";

export const metadata = {
  title: "Offers & Deals | The Organic Editorial",
  description: "Get up to 60% off on your weekly pantry essentials. Sustainable, organic, and now exceptionally affordable.",
};

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <OffersPageClient />

      <Footer />
      <MobileNav />
    </>
  );
}
