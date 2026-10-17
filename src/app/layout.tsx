import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serifFont = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  weight: "400 900",
  variable: "--font-serif",
  display: "swap",
});

const sansFont = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  weight: "200 800",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acacia Furniture Kenya | Office Furniture & Event Seating",
  description:
    "Explore office chairs, executive desks, event seating and digital safes. Browse 17 models with prices in KSh and request a quote from our Nairobi team.",
  openGraph: {
    title: "Acacia Furniture Kenya | Good furniture. Better everyday spaces.",
    description:
      "Office furniture, event seating and digital safes. Explore our Nairobi collection and request a personalised quotation.",
    siteName: "Acacia Furniture Kenya",
    locale: "en_KE",
    type: "website",
  },
  icons: { icon: "/brand/favicon.jpeg", apple: "/brand/favicon.jpeg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
