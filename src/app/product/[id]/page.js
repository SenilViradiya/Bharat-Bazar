import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import AddToCartButton from "./AddToCartButton";
import WishlistButton from "@/components/WishlistButton";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);
  return {
    title: product ? `${product.name} | The Organic Editorial` : "Product Not Found | The Organic Editorial",
    description: product?.description || "The finest organic products.",
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 5);
    
  if (relatedProducts.length === 0) {
    relatedProducts.push(...products.filter(p => p.id !== product.id).slice(0, 5));
  }

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-label text-outline mb-6">
          <Link href="/" className="hover:text-primary cursor-pointer">Home</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <Link href={product.category === 'grocery' ? '/category' : '/fruits-vegetables'} className="hover:text-primary cursor-pointer capitalize">
            {product.category || "Grocery"}
          </Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-on-surface font-semibold">{product.name}</span>
        </nav>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Gallery */}
          <div className="lg:col-span-7 grid grid-cols-4 gap-4">
            <div className="col-span-4 aspect-square  overflow-hidden bg-surface-container-low flex items-center justify-center p-8">
              <Image alt={product.name} className="w-full h-full object-contain mix-blend-multiply" src={product.img} width={800} height={800} priority />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-3 py-1  bg-primary-fixed-dim text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">Premium Organic</span>
            </div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">{product.name}</h1>
              <WishlistButton product={product} />
            </div>
            <p className="text-outline text-sm mb-6">{product.description || `Fresh ${product.name} delivered to your door.`}</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-sm font-body text-primary align-top mt-1">₹</span>
              <span className="text-4xl font-headline font-extrabold text-on-surface">{product.price}</span>
              {product.old && <span className="text-outline line-through text-lg ml-2">{product.old}</span>}
              {product.badge && <span className={`text-tertiary font-bold text-sm bg-tertiary-fixed px-2 py-0.5  ml-4`}>{product.badge}</span>}
            </div>

            {/* Weight Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                Select Quantity <span className="text-xs font-normal text-outline">(Inclusive of all taxes)</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3  border-2 border-primary bg-primary-container/10 text-primary font-bold transition-all">{product.weight}</button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-10">
              <AddToCartButton product={product} />
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4 p-4  bg-surface-container-low">
              {[
                { icon: "eco", color: "text-primary", title: "100% Organic", desc: "Certified pesticide-free" },
                { icon: "precision_manufacturing", color: "text-primary", title: "Authentic", desc: "Sourced locally" },
                { icon: "local_shipping", color: "text-secondary", title: "Express Delivery", desc: "In your kitchen by 8 AM" },
                { icon: "history", color: "text-tertiary", title: "Farm to Fork", desc: "Traceable source batch" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <span className={`material-symbols-outlined ${f.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                  <div>
                    <p className="text-xs font-bold">{f.title}</p>
                    <p className="text-[10px] text-outline">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section className="mb-20">
          <div className="border-b border-outline-variant flex gap-8 mb-8 overflow-x-auto hide-scrollbar">
            <button className="pb-4 border-b-2 border-primary text-primary font-bold whitespace-nowrap">Product Description</button>
            <button className="pb-4 text-outline font-medium hover:text-on-surface whitespace-nowrap">Nutritional Facts</button>
            <button className="pb-4 text-outline font-medium hover:text-on-surface whitespace-nowrap">Storage &amp; Usage</button>
            <button className="pb-4 text-outline font-medium hover:text-on-surface whitespace-nowrap">Farmer Details</button>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-bold">The Digital Agrarian Promise</h2>
              <p className="text-on-surface-variant leading-relaxed">Our {product.name} is not just another staple; it&apos;s a commitment to your health. Sourced directly from trusted farms, harvested using traditional methods.</p>
              <p className="text-on-surface-variant leading-relaxed">Expect the freshest produce that stays fresh longer. We maintain a zero-additives policy across our catalog.</p>
            </div>
            <div className="bg-surface-container-highest  p-8 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10"><span className="material-symbols-outlined text-9xl">eco</span></div>
              <h3 className="text-lg font-bold mb-4">Why {product.name} is different?</h3>
              <ul className="space-y-4">
                {["Farm Fresh Daily", "Rich in Natural Nutrients", "Premium Grade Quality", "Sourced Responsibly"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-headline font-extrabold">Complete Your Pantry</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-2 px-2">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="min-w-60 max-w-60 bg-surface-container-lowest  p-4 group transition-all shrink-0">
                <div className="aspect-square  overflow-hidden bg-surface-variant mb-4 relative">
                  <Image alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={p.img} width={300} height={300} />
                </div>
                <p className="text-[10px] font-bold text-primary-container mb-1 capitalize">{p.category}</p>
                <h4 className="font-bold text-sm mb-1 truncate">{p.name}</h4>
                <p className="text-xs text-outline mb-3">{p.weight}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] text-primary">₹</span>
                  <span className="font-bold">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
