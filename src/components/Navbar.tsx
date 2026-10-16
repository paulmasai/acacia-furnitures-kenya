'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X, Heart, Phone, MapPin } from 'lucide-react';
import { businessDetails } from '@/lib/content';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  categories?: { id: string; name: string }[];
}

export default function Navbar({ cartCount = 0, onOpenCart, categories = [] }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
      {/* Top Announcement Bar (rendered only if announcement, phone, or showrooms are configured) */}
      {(businessDetails.announcement || businessDetails.phone || businessDetails.showrooms.length > 0) && (
        <div className="bg-brand-text text-brand-card text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
            {businessDetails.announcement ? (
              <div className="flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                <span>{businessDetails.announcement}</span>
              </div>
            ) : <div />}
            <div className="flex items-center gap-4 text-[11px] justify-center">
              {businessDetails.showrooms.length > 0 && (
                <span className="flex items-center gap-1 text-brand-card/90">
                  <MapPin className="w-3 h-3 text-brand-accent" />
                  {businessDetails.showrooms.map((s) => s.name).join(' & ')}
                </span>
              )}
              {businessDetails.whatsapp && (
                <a
                  href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-brand-card/90 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-brand-accent" />
                  {businessDetails.whatsapp}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-brand-text hover:text-brand-accent focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-brand-bg shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
                  <circle cx="12" cy="12" r="6" strokeOpacity="0.7" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-serif text-2xl font-bold tracking-wider text-brand-text group-hover:text-brand-accent transition-colors">
                  {businessDetails.name.split(' ')[0] || 'ACACIA'}
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-accent -mt-1">
                  {businessDetails.name.split(' ').slice(1).join(' ') || 'Furniture Kenya'}
                </span>
              </div>
            </Link>
          </div>

          {/* Dynamic Navigation Links from Categories */}
          <nav className="hidden lg:flex space-x-7">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {businessDetails.whatsapp && (
              <a
                href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors shadow-sm"
              >
                Inquire
              </a>
            )}

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-brand-accent rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="py-3 border-t border-brand-border">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search catalog..."
                className="w-full bg-white border border-brand-border rounded-lg py-2 pl-10 pr-4 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                autoFocus
              />
              <Search className="h-4 w-4 text-brand-muted absolute left-3 top-3" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg px-4 pt-3 pb-6 space-y-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-brand-text hover:bg-brand-card rounded-md"
            >
              {cat.name}
            </a>
          ))}
          {businessDetails.whatsapp && (
            <div className="pt-2 border-t border-brand-border">
              <a
                href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                className="w-full block text-center py-2.5 rounded-lg bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-colors"
              >
                Chat on WhatsApp ({businessDetails.whatsapp})
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
