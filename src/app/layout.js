import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Bharat Bazaar Fresh | The Organic Editorial",
  description:
    "Sustainably sourced, traditionally milled staples and fresh produce for your kitchen. Direct from local agrarian cooperatives across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
