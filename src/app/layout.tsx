import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const serifFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Acacia Furniture Kenya | Handcrafted Solid Acacia Hardwood in Nairobi',
  description:
    'Luxury handcrafted solid Kenyan Acacia hardwood furniture. Explore live-edge dining tables, platform beds, executive desks, and custom slabs. Karen & Westlands Showrooms.',
  keywords: [
    'Acacia furniture Kenya',
    'live edge dining table Nairobi',
    'solid hardwood furniture Kenya',
    'handcrafted furniture Nairobi',
    'Karen furniture showroom',
    'Kenyan acacia wood slabs',
    'custom timber furniture Kenya',
  ],
  authors: [{ name: 'Acacia Furniture Kenya' }],
  openGraph: {
    title: 'Acacia Furniture Kenya | Solid Hardwood Heirloom Furniture',
    description:
      'Handcrafted in Nairobi using 100% solid, kiln-dried Kenyan Acacia. Experience live-edge tables, bespoke consoles, and luxury bedroom pieces.',
    url: 'https://acaciafurniture.co.ke',
    siteName: 'Acacia Furniture Kenya',
    locale: 'en_KE',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#faf7f2] text-acacia-950 selection:bg-acacia-300 selection:text-acacia-950">
        {children}
      </body>
    </html>
  );
}
