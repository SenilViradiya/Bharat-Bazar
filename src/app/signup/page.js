import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Account | The Organic Editorial",
  description: "Create your Bharat Bazaar Fresh account",
};

export default function SignupPage() {
  return (
    <>
      <main className="grow flex items-center justify-center p-6 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 right-0 w-96 h-96 harvest-glow -mr-32 -mt-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 asymmetric-shape -ml-20 -mb-20 z-0"></div>

        <div className="w-full max-w-xl z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">person_add</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary brand-font italic">Create Account</h1>
            <p className="text-on-surface-variant mt-2 font-medium">Join Bharat Bazaar Fresh in a few quick steps</p>
          </div>

          <div className="bg-surface-container-lowest p-8 shadow-sm border border-outline-variant/15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2 px-1">First Name</label>
                <input
                  className="block w-full px-4 py-3.5 bg-surface-container-high border-none text-on-surface font-semibold focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-stone-400"
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2 px-1">Last Name</label>
                <input
                  className="block w-full px-4 py-3.5 bg-surface-container-high border-none text-on-surface font-semibold focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-stone-400"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-on-surface mb-2 px-1">Email</label>
              <input
                className="block w-full px-4 py-3.5 bg-surface-container-high border-none text-on-surface font-semibold focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-stone-400"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-on-surface mb-2 px-1">Mobile Number</label>
              <div className="relative flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-on-surface-variant font-bold text-sm">+91</span>
                </div>
                <input
                  className="block w-full pl-14 pr-4 py-3.5 bg-surface-container-high border-none text-on-surface font-semibold focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-stone-400"
                  placeholder="98765 43210"
                  type="tel"
                />
              </div>
            </div>

            <Link
              href="/"
              className="w-full bg-primary text-on-primary py-4 font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all mb-8 inline-block text-center"
            >
              Create Account
            </Link>

            <div className="relative flex items-center mb-8 mt-8">
              <div className="grow h-px bg-surface-container-high"></div>
              <span className="shrink mx-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                or login with
              </span>
              <div className="grow h-px bg-surface-container-high"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.239 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.417 4.337-17.694 10.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.167 0 9.86-1.977 13.409-5.197l-6.191-5.238C29.141 35.091 26.715 36 24 36c-5.219 0-9.621-3.317-11.283-7.946l-6.522 5.025C9.433 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.085 5.565l.003-.002 6.191 5.238C36.971 39.201 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
                <span className="text-sm font-bold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                <svg
                  className="w-5 h-5 text-secondary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 8L12 13L20 8" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-sm font-bold text-on-surface">Email</span>
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-on-surface-variant text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
