import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import DealOfDaySection from "@/components/DealOfDaySection";
import FreshlyPickedSection from "@/components/FreshlyPickedSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="mt-8 relative  overflow-hidden min-h-[480px] flex items-center organic-gradient">
          <div className="relative z-10 w-full md:w-1/2 p-12 text-on-primary">
            <span className="inline-block px-4 py-1  bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold mb-6">
              STAPLES FESTIVAL
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold leading-tight mb-4">
              Upto 50% off on Staples
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-md">
              The kitchen essentials you love, sourced directly from
              Bharat&apos;s finest farms. Pure, unadulterated, and fresh.
            </p>
            <Link
              href="/category"
              className="bg-surface-container-lowest text-primary font-bold py-4 px-10  hover:scale-105 transition-transform inline-block"
            >
              Shop Now
            </Link>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 h-full overflow-hidden hidden md:block">
            <Image
              alt="Bharat Bazaar Fresh"
              className="w-full h-full object-cover transform scale-110 -rotate-2 origin-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEdQ2Fv_Lr8xgKrkphz731RuGsvAugy84KzyNZd3pWMZBiFnpsnZ7r7jh3Q7yai81kGYDmmb6YmgYYT6-cz-ak83zgjhsCAXRFfjS0Falwi3xM7j3JjWJyUMXT2skgQogWMsOnx94FHYXDbavStj0mBLUk6ZGYO5-fnYNqfAvGt9GhWkh-xRwW5pT3Dj2b4Rtn0CytrsRvG20iYe7wX5JceFLP9fwJ_9thGNBzmRNQMfe5xLW9wfjbTCHNsg9TnHJ5uwfaCGZrtKg"
              width={1200}
              height={800}
              priority
            />
          </div>
        </section>

        {/* Browse by Category */}
        <section className="mt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-headline font-bold text-on-surface">
                Browse by Category
              </h2>
              <p className="text-on-surface-variant">
                Sourced with care from local farmers
              </p>
            </div>
            <Link
              href="/category"
              className="text-primary font-semibold flex items-center gap-1 hover:underline"
            >
              View All{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-4 -mx-6 px-6">
            {[
              {
                name: "Fresh Produce",
                href: "/fruits-vegetables",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLyZEHg2VJ9dxGBoqXPpW6NVdKn5IQH85kd-05A-0KgzR1zZp_QuYzKCHg6D9_g7COhYfPxhu8FhE4YoVsD4gw7X2q-NlswePivGsBaL2igNim-q0mUgHrXnfeJSobq0TKujjf44vV47-jmcDxCHG0ocYmvEq730osGiAJ-jXah4vNGTIjs_bV22Tqlo9LbvOSgK1VbnVt139tva8H_xkoqkouZDKdctlkRKNUBm-BwXfNwMufDhf6i1tsyNlfXi_D3clyI9Zh43E",
              },
              {
                name: "Dal & Pulses",
                href: "/category",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdOqO5uwuH6vJ7HH7z9pSHRvreP7jVoflvdBGpFD9shMqXVtUQgaOxfOF-biSsg_Qhn6I8h7llTmXGEvmJ0iUUuQV2jujjzNRPM-kAfBdLJseHw3iyINIocUeyV5RVD7yjpY3OHY4eFkRUJKMS_4Zcq5jpMcCEWxMSmXKpnCrvv6jn05dH51LOAptl2BK0pA3658vQXwTn62O89jo0uTUTG09mDFjZyXKTTIwCaSmBiWDILBNF1-u8OpneVmKNb5jhs6cnBQGEiRk",
              },
              {
                name: "Atta & Flours",
                href: "/category",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMrLbi1Em8JKtver6jZe390ClvOfrNxWf5vxfr_Mpr93y6q3VcNpeBNW7VFwbI3eQKrzZKlsmoWRXbDp4Su4nV1GHSOjVU6pIoiBkBCHNfBapKh2wS2RUB-2VrCOF12zdWO59lN9sGxsJFW9q_kJb8WeGc_GVmcNjXuR-ylgB9_U-eR97d2TAhEvgCzcqywABxO20lzxm-84SvcbOZSzALiA4lyDKkOogddJ-42uLAIAyxWCJWDop2YtXi3SbS4neh4A30BqAtWyA",
              },
              {
                name: "Rice & Grains",
                href: "/category",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBil4fUCWSLj0GbSZy4mi-iyz59w2thUty5C37992iQa0OiE732ezlOi_kilbDR0lbUsjqVBHGHQNSOuVmLtLw0Gv23KcU03WHjngDTIvHvlD2SF2InH2Jen0415eGuMYC-sM0DERy90POxWM60wlsLb7CbHAhSaFJZLaYQvsWMF8pWCUfk62kZ4XQT6_Y5pL1YXMjRJ5XgRUYNLspXQXm-fyBwGNX32jtajXb8e3kPwH3HDOta3z2fvsf_wwwKsDww14Xdu55FFpo",
              },
              {
                name: "Pure Spices",
                href: "/category",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEe5OJGDnTmRPCsoxpicxhLQqQld1qzrAAxTwyJGDCeUSSpUyrCQjBr3Z75m0iJXmynLwLDM90ig6HVY3Bdbz9dQNqPeU7LonloAtq7mMSaOiipXoDdTsdrUs-naaVl2ODxcsGqS6ynLnwgj1qa0W2uVBDXfKttgGb5zY8bCl76F1dauX2e0zQyKtavslvvc8GrClKed-P5m5wvoqRto_J9dw35Wi40_13zFyo1CLPQhRQ5Sc5cq7GbS57AyCBIJZn56ym25Wg8MA",
              },
              {
                name: "Farm Dairy",
                href: "/fruits-vegetables",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASqoOms99LjkT-Xz9Yb9-l3gIbWb7ecwHB6kBb5CB7U9b0rXSKxSsfMJBWkaaVGOtPH0B3zCcXV8qci7JghE7kJpigvaXdsK2SgYXz_06Sj0VP9z3SFvmLTPeFNW18JjyYVzgnXKpW_qHhWAVOJVjfXcRNb9nNClqkdaf_HOSJDs-KvLCJb8bydV_I8t6L9CjNS-zCR-JHu_Wu3hveT85ERHyfH4MMpa6_Zs0JmGleLxEr5BZYeLyl6F4RWO_BZdc4gfx_eN9zYhI",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex-none w-40 text-center group cursor-pointer"
              >
                <div className="w-40 h-40  bg-surface-container-low mb-4 overflow-hidden p-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    alt={cat.name}
                    className="w-full h-full object-cover "
                    src={cat.img}
                    width={160}
                    height={160}
                  />
                </div>
                <span className="font-bold text-on-surface group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <DealOfDaySection />

        <FreshlyPickedSection />

        {/* Newsletter */}
        <section className="mt-24 bg-stone-900  p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-stone-100">
            <h2 className="text-4xl font-headline font-bold mb-4">
              The Harvest Journal
            </h2>
            <p className="text-stone-400 mb-8 max-w-lg">
              Get weekly recipes, farm stories, and exclusive subscriber-only
              discounts delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 bg-stone-800 border-stone-700  px-6 py-3 text-stone-100 focus:ring-primary"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-primary text-on-primary font-bold px-8 py-3  hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className=" overflow-hidden aspect-square relative group">
              <Image
                alt="Farm story"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCHegihYnPNkgJT436_slbGy1O9BEp0-DFzs6THnsZ9h8nB7rheDfrPX_bHWAj2fIctDTKakxqzVQ0mStwg91xko55lNDoT9gjYYURodIHAmq8TxyWDr8x3BpV5ZDTzlhiArcG300VABYFq8xwCuRc20m9pRa6K9wmh1efJZs8u0Zmm2-SHWGlW4q0IdWTHsNjNe8mtJdv-XgRbYBg9vgsJtCRwwsA9lgjG3j-c4mmGlIcsiGY7he-lNtIvbTKJvhdXZg8WDygeg"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-end items-end">
                <p className="text-white text-sm font-bold">
                  Meet our Farmers
                </p>
              </div>
            </div>
            <div className=" overflow-hidden aspect-square relative group">
              <Image
                alt="Recipes"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9JM6TXFUdCDlLi4YXScvXLPLl8pPUTbivuafJQD2dAHwVHf09rPkdNXATrxghwcURVXl2_FNRrDoBUJhKFLBOGTvlxvzqkuuuGA0Zkg25m5GEyX3MzQwNVxNvOynGXKy3R2B4VkJgKF6W-pOP77SWOVUGwssDOaGfHx4UIoLXIaiyDF6YuKMTm_9qIBPzK-dyKasL4_yUX2MIcYRgCwdJO3qx4bXADVjfnogkrDjZ9qbZkWapaRpFunh0y_D7VEH51Shb3n2lZas"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-end items-end">
                <p className="text-white text-sm font-bold">Daily Recipes</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
