import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

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

        {/* Deal of the Day */}
        <section className="mt-20 relative p-12  overflow-hidden bg-surface-container-low">
          <div className="harvest-glow absolute inset-0"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">
                  Deal of the Day
                </h2>
                <p className="text-on-surface-variant">
                  Exclusive prices for the next 12 hours
                </p>
              </div>
              <div className="flex gap-4 items-center bg-white p-2  shadow-sm">
                <div className="px-6 py-2 bg-tertiary  text-on-tertiary font-bold tabular-nums">
                  04 : 22 : 15
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Fortune Chakki Atta",
                  desc: "5 kg Pack",
                  old: "₹245",
                  price: "199",
                  badge: "20% OFF",
                  badgeClass: "bg-secondary text-on-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmca3pSlXyT0Ar6uJN_Hehx18vJ3K4jeEqbIjRZ7MloiVumGcPgsrmP2D5T2iQGe02tZAhQSEDPMbg82ki5KuYcw7tEpOB3LCHmPJyNvL_zgTXupzN6JdojTrV7Sm3_ugU4VnpZCi5l9bKl6Bt6Sx8rnOze4Vp5IFnP3-fqlD8wS0mX2dzp0tbeF8eoYFJBACauEWtEWbX0UvxD1I44_X3Qp1dWvixxNxo_elB5unNZDva7nxIxpSglR_520G7NFIs3-LwZAxnSow",
                },
                {
                  name: "Daawat Basmati Rice",
                  desc: "1 kg - Super Rozana",
                  old: "₹120",
                  price: "98",
                  badge: "15% OFF",
                  badgeClass: "bg-secondary text-on-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgovRAyLREQVdaknTRbpl0HePrO8TOZMDAwuBOdnWm22QfwK0z2ul5UPQLMxrqaSBOwMIA139G8xb65I15GP3537fKlw0HCbVBDvP9G_2AdTkkXQ6F_YIwivNyQAUnVavcMIxFEomUCe4SFyPsSc1YwBfhOzR8PMus8GKc_Hc138-hdcSw8-VwcvzP92ggDZiGFdiptVD0mLpSMD6TppxnaFgqkMSX5ynKwaf2o77cH89IFDnL1fCNf-jOeT8raphqqOCmRzamru8",
                },
                {
                  name: "Alphonso Mango",
                  desc: "6 Units (Box)",
                  old: "₹750",
                  price: "599",
                  badge: "BEST PRICE",
                  badgeClass: "bg-secondary text-on-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3PmOiPTfN73cyYbF-8FmZTrAH4h97rvHbgQqqcW20LJ0ijTBeC_Ey9m3-sL-cPkXqbu1cKN4ppreAI1HkGl3U-AOyRUVhschpUqGCgqBJL3R3CNwndeizaaUfwVK_i57Lxx6aCjgi3JlfLlBs2KWSpXeJEV-vx9MlvdAHJScjkZ8JeDkVYomIIVuUCgfTg3uAmUPAEdXAZeHBxbmFQq1D2o9Omgpnh2of54aJFFtW86BYZ0qxb5VcRbLu9DQrnSGwCG1SWwmaNI",
                },
                {
                  name: "Cold Pressed Oil",
                  desc: "1 Litre Bottle",
                  old: "₹210",
                  price: "175",
                  badge: "FLASH",
                  badgeClass: "bg-error text-on-error",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzry-ftBlxes46BLa4DbmeMYib8jExwMc2WnbZ-bX2VidoalLJs2Qjhdd7LOmhTNrC2yLi6FSeloAlaOjU0PECn0njueC-UlQ1RFN-NLe9yhR3dN665Ezs9lsa0xHW5bypszwoNLt5TyzVBg8tbe7VTNihwHUtNEiokCO_xOdtCJIp9K0kUaXC8_qFo1rek1R0yL3XdIJkh0tDrwQTY8yaFdMA89lBW7B1pey9GDIj6fkb7NpslJrMjY6Wq9USbzG0QWtCM24ZOU",
                },
              ].map((product) => (
                <Link
                  key={product.name}
                  href="/product"
                  className="bg-surface-container-lowest  p-4 flex flex-col group relative"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`${product.badgeClass} text-[10px] font-bold px-2 py-1 `}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <div className="aspect-square bg-surface-variant  mb-4 overflow-hidden">
                    <Image
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={product.img}
                      width={400}
                      height={400}
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-xs text-on-surface-variant mb-4">
                    {product.desc}
                  </p>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-xs line-through text-on-surface-variant">
                        {product.old}
                      </span>
                      <div className="text-2xl font-bold text-primary font-body flex items-baseline">
                        <span className="text-sm font-medium mr-1">₹</span>
                        {product.price}
                      </div>
                    </div>
                    <button className="w-10 h-10  bg-primary text-on-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Freshly Picked */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-2">
                Freshly Picked
              </h2>
              <p className="text-on-surface-variant">
                Harvested before dawn, delivered to your door by noon. Experience
                the true taste of Bharat&apos;s fields.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="w-12 h-12  border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12  border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Fresh Broccoli",
                weight: "1 Unit (~400g)",
                price: "₹65",
                organic: true,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cNa2BeouAQ2wM22FSP7VEV8lHyHX9EcpJQzkgR3nt1uszgBYa4n4mbEanld3F8Xzwh3pfw3X6DtHIm3LbYfJDHqwWT9xD0FGWTCVIJ97qq7UfvD2RGO4z17MDtlfkM4ua5S9n9csYJnWhFrhrxUKJVgT2zBXPt8gZZZwDXiKHRkdUyZKy7kLVnX_MMQqjWQZeN5MM5vGcjPW6xSGo8Qj3gLkwzfwPT2F6bq9XFzR5HR3RldZCfOgGgkosQFpnY480vII0AA6sBg",
              },
              {
                name: "Baby Potatoes",
                weight: "500g",
                price: "₹28",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1YVd_X0THnicQ9ZBJQBnaR0DjlvVGGSeY7mA_1duYAukUk1z4Oe8xZgk39zKAnRLOqrE1BHgyw6wvHE0V4Go9kNFvERTnQy8Hq8aanyVZGfFs78AuYzH9RXG4nNLauTo8Bo8DK1gwZ6fCU-nnOlwuUWyTDzgOR6WSS_uc6Ic55qmHKsnJm_sod8XdxLNN5_CaLfgZIm95Ssip-f4dCM1mGWSHbcKSj19sIk0JdJdwjb4_WXuPxdCqJxNPMB2e8TNA7-EbTHRZuTk",
              },
              {
                name: "Red Onion",
                weight: "1 kg",
                price: "₹42",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADs8HAaY3gozJsSdoyf4LhNCSkIgq4m4UxZu7_2Lvo25ogkfDaVSFuINfW-V7pdwfL-svA-xSfWM9CmR3pnnsbf_kE7_BL25Lj_JuSMhRUDTyZJzS0xtyQoRcTPRzwO8sZm07maXaLFmb476MDyNLCVC0-zU_6LwEy6PnPD36RFomB0WgaHXMj7ezv3v-Kw7L3wroZX2NzgqCZFBToRrJeECa7JyHiaNHRerYI0pSxjmAjpDA1YEcJr4V-A5AldXlhhqeL117hXxI",
              },
              {
                name: "Local Carrots",
                weight: "500g",
                price: "₹35",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlGgFKtqZLWlfxeYFf_r5ie8CbYRFBhGUs7trAl5bN2b-iMNYM92FMxfZ868qLFdNeCO8RGqpLoAwEusPNy4qTn2UU6Xj3Hk44TJiw9eJ5F3Wsg1MLczOrBtWUeTDexmYrnt1J2SIOFZ9Tod5zv6xb39FgCcEUHHMhy-dInEV-4Tzz62Nrr2Q9iTGqP-FuOKScZ7TQ_j8Apb06eIdLHSqwQM09qK5CB19yYiOzNPj88vnw58aVTqDkFKF_EVvGMErpfqDYV1OAqzE",
              },
              {
                name: "Pomegranate",
                weight: "2 Units",
                price: "₹180",
                organic: true,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC01CjPcn8jYeJsBE52gd4oqm6pUM4kF4avOsAQeeSNGvUD_7eb6ni7uYizt4PCZM0P5x5Jzq7oao09U4Ul7GaFu7eIqJ7Y_fnctF1Ar-00T-iNBBXCDgrrDAoXIpEkNjUuSIgbh8EyEC_0l_BTS_vjpxNduEtoyYtwvGeUK9yPEvZTJ15-37RP7L7qKmcDxzBB-xi2RjpJ7sSHZ-aaV3t2u2heaN39uROCwUVuhnw53eHzBW3_Aez4AWuvWvRaa1NQTWTu4nO-FY",
              },
              {
                name: "Robusta Banana",
                weight: "6 Units (Half Dozen)",
                price: "₹32",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4qd_im95pQHdS1bfVLnDYNvF_-7fHZDu823v4RACKbByOFeV_jP4X_SBPg2viqDBceeNHsW0SLMAxTTJej3A1JcdRo00eIFc6fBHPAr1wJtaboZJ8dlKUgaS9Dx_lrDuvGzIl6ed_fcNR6OsFHPI5iQ1-MZwLHic14zc4LWKuQQy47McXLcRtJAHJPaXcvL0hzwnOsxetfmyDGohBsYMD8ohYgk7OTwjwhVSdmvsT0ShncaNgwCVBL8UqoMBK1ytZE7AAOyOtBJY",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href="/product"
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-surface-container-low  mb-4 overflow-hidden relative">
                  <Image
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={item.img}
                    width={300}
                    height={375}
                  />
                  {item.organic && (
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1  text-[10px] font-bold text-primary">
                      ORGANIC
                    </span>
                  )}
                </div>
                <div className="px-1">
                  <h4 className="font-bold text-on-surface">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant mb-2">
                    {item.weight}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{item.price}</span>
                    <span className="material-symbols-outlined text-primary text-xl">
                      add_circle
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

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
