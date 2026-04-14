import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-stone-200 bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          <span className="font-headline font-bold text-lg text-green-900">
            Organic Editorial
          </span>
          <p className="text-stone-500 text-xs leading-loose">
            Bharat Bazaar Fresh is committed to bringing the soul of Indian
            agriculture directly to your kitchen. Sustainably sourced, ethically
            delivered.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-green-900 uppercase tracking-widest">
            Shop
          </h4>
          <div className="flex flex-col gap-2 font-body text-xs leading-loose text-stone-500">
            <Link
              href="/category"
              className="hover:text-green-700 cursor-pointer"
            >
              Staples &amp; Grains
            </Link>
            <Link
              href="/fruits-vegetables"
              className="hover:text-green-700 cursor-pointer"
            >
              Fresh Produce
            </Link>
            <Link
              href="/offers"
              className="hover:text-green-700 cursor-pointer"
            >
              Offers &amp; Deals
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-green-900 uppercase tracking-widest">
            Company
          </h4>
          <div className="flex flex-col gap-2 font-body text-xs leading-loose text-stone-500">
            <span className="hover:text-green-700 cursor-pointer">
              About Us
            </span>
            <span className="hover:text-green-700 cursor-pointer">
              Delivery Info
            </span>
            <span className="hover:text-green-700 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-green-700 cursor-pointer">
              Partner with Us
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-headline font-bold text-sm text-green-900 uppercase tracking-widest">
            Experience
          </h4>
          <div className="flex flex-col gap-2 font-body text-xs leading-loose text-stone-500">
            <span className="hover:text-green-700 cursor-pointer">
              Download App
            </span>
            <div className="flex gap-4 mt-2">
              <span className="material-symbols-outlined text-2xl text-stone-400">
                brand_family
              </span>
              <span className="material-symbols-outlined text-2xl text-stone-400">
                payments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-stone-200 flex justify-between items-center">
        <span className="font-body text-xs leading-loose text-stone-500">
          © 2026 The Organic Editorial. Sustainably Sourced.
        </span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-stone-500 hover:text-green-700 cursor-pointer">
            public
          </span>
          <span className="material-symbols-outlined text-stone-500 hover:text-green-700 cursor-pointer">
            mail
          </span>
          <span className="material-symbols-outlined text-stone-500 hover:text-green-700 cursor-pointer">
            call
          </span>
        </div>
      </div>
    </footer>
  );
}
