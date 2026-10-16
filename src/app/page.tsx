'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import CategoryCarousel from '@/components/CategoryCarousel';
import BestsellersGrid from '@/components/BestsellersGrid';
import Footer from '@/components/Footer';
import { Product } from '@/lib/supabase';
import {
  products,
  categories,
  trustBadges,
  businessDetails,
  storyContent,
  testimonials,
} from '@/lib/content';
import {
  ShoppingBag,
  X,
  MessageCircle,
  MapPin,
  Store,
  Building2,
  ShieldCheck,
  Truck,
  FileText,
  Star,
  Download,
  Send,
  PhoneCall,
} from 'lucide-react';

interface CartItem extends Product {
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [b2bSubmitted, setB2bSubmitted] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const formatKsh = (amount: number) => {
    return 'KSh ' + amount.toLocaleString('en-KE');
  };

  const generateWhatsAppCheckoutLink = () => {
    const phone = businessDetails.whatsapp ? businessDetails.whatsapp.replace(/[^0-9]/g, '') : '';
    if (!phone) return '#';
    if (cart.length === 0) return `https://wa.me/${phone}`;
    const lines = cart.map(
      (item) => `• ${item.name} (${item.quantity}x) — ${formatKsh(item.price * item.quantity)}`
    );
    const message = `Hello ${businessDetails.name}!\n\nI would like to order the following items:\n${lines.join(
      '\n'
    )}\n\n*Total:* ${formatKsh(cartTotal)}\n\nPlease advise on payment (Lipa na M-Pesa / Invoice) and Nairobi delivery.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      {/* Navigation */}
      <Navbar
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        categories={categories}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenB2BModal={() => setIsB2BModalOpen(true)}
        />

        {/* Value Proposition Badges */}
        <TrustBadges badges={trustBadges} />

        {/* Curated Categories Carousel */}
        <CategoryCarousel
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(id) => {
            setActiveCategory(id);
            const el = document.getElementById('bestsellers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Products Catalog */}
        <BestsellersGrid
          products={products}
          selectedCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />

        {/* Corporate Fit-Out & B2B Procurement Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-brand-bg">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand-text text-white rounded-2xl p-8 lg:p-14 relative overflow-hidden shadow-2xl border border-brand-accent/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-card px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    <span>{storyContent.badge}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {storyContent.title}
                  </h2>
                  <p className="text-sm sm:text-base text-brand-border leading-relaxed max-w-2xl">
                    {storyContent.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {storyContent.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xs shrink-0">
                          ✓
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">{pt.title}</p>
                          <p className="text-[11px] text-brand-muted">{pt.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => setIsB2BModalOpen(true)}
                    className="w-full h-12 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Request Fit-Out Consultation</span>
                  </button>

                  <a
                    href={`https://wa.me/${businessDetails.whatsapp.replace(
                      /[^0-9]/g,
                      ''
                    )}?text=Hello%20Corporate%20Sales,%20we%20have%20an%20office%20fitout%20tender%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-card" />
                    <span>Direct B2B Desk: {businessDetails.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nairobi Showroom & Logistics Hub */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-brand-card/50 border-t border-brand-border" id="showrooms">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-brand-accent font-bold">
                  Nairobi Experience Centres
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text">
                  Experience Ergonomics &amp; Build Quality Firsthand
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Visit our dual showrooms along Mombasa Road and Westlands. Test over 40 chair models, inspect heavy-density steel gauges, and consult with our interior project specialists.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-brand-border shadow-sm flex items-start gap-4">
                    <Store className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-brand-text">
                        Mombasa Road Main Showroom
                      </p>
                      <p className="text-xs text-brand-muted">
                        Enterprise Plaza, Unit B2, Mombasa Rd, Nairobi
                      </p>
                      <p className="text-[11px] text-brand-accent font-semibold mt-1">
                        Open Mon - Sat: 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-brand-border shadow-sm flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-brand-text">
                        Westlands Corporate Studio
                      </p>
                      <p className="text-xs text-brand-muted">
                        Woodvale Grove, 4th Floor, Westlands, Nairobi
                      </p>
                      <p className="text-[11px] text-brand-accent font-semibold mt-1">
                        By Appointment &amp; Private Consultations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nairobi Map / Showroom Card */}
              <div className="lg:col-span-6">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg relative bg-brand-card border border-brand-border">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj4OV__fo4wODWdWdWLrQbw3ybnoVKypr6Z2kYRbEuKW8srEJ6moc0ZItOtWf00E3KflD5QfIKSmdCnUdlzN4ZQR0gS3n2IdtkEQtk7UrU8yu0KU2t3kZ24oq4HGaHvjfXwvXMOGj4fSXNfsXW5mbMdmuFWdBUWTrFQlEcU74JSxN64q5Hxfkm-c7kSbj51-tP3jJ0J3py2j6XefMboQlK5mEuhdYSLc2Fi1nE5a7V92Y1nFxDdbU5')`,
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-brand-border flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-text">Acacia Flagship Showroom</p>
                      <p className="text-[11px] text-brand-muted">Enterprise Plaza, Mombasa Road • Secure Parking</p>
                    </div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-serif font-bold text-center text-brand-text">
                Trusted By East Africa's Corporate Leaders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-brand-border shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <p className="text-xs text-brand-text italic leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-brand-border">
                      <p className="text-xs font-bold text-brand-text">{item.author}</p>
                      <p className="text-[11px] text-brand-muted">{item.role}, {item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Trust Partners Bar */}
            <div className="pt-6 pb-2 border-t border-brand-border flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold text-brand-muted uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>Lipa Na M-Pesa Authorized</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-accent" />
                <span>Wells Fargo Courier Freight</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>G4S Kenya Secure Handling</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>KRA ETR Compliant</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Cart Slide-Over Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-brand-border">
              {/* Cart Header */}
              <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-card">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-accent" />
                  <h3 className="text-lg font-serif font-bold text-brand-text">
                    Your Selection ({cartItemCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-brand-muted hover:text-brand-text transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-brand-card flex items-center justify-center mx-auto text-brand-muted">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-brand-text">
                      Your bag is empty
                    </p>
                    <p className="text-xs text-brand-muted">
                      Select items from the catalog to request order or quotation.
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 rounded-xl border border-brand-border bg-brand-card/40"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-brand-card flex-shrink-0">
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-brand-muted text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-brand-text line-clamp-1">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="text-brand-muted hover:text-red-700 transition-colors ml-2"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[10px] text-brand-muted mt-0.5">
                            Qty: {item.quantity} {item.dimensions ? `• ${item.dimensions}` : ''}
                          </p>
                        </div>
                        <p className="text-xs font-bold text-brand-accent">
                          {formatKsh(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer / Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-brand-border bg-brand-card space-y-4">
                  <div className="flex justify-between text-base font-bold text-brand-text">
                    <span>Estimated Total:</span>
                    <span className="font-serif text-lg">{formatKsh(cartTotal)}</span>
                  </div>

                  <a
                    href={generateWhatsAppCheckoutLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Checkout via WhatsApp &amp; M-Pesa</span>
                  </a>

                  <p className="text-[11px] text-center text-brand-muted">
                    Instant confirmation with our Nairobi commercial desk. ETR Invoicing available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* B2B Quotation Modal */}
      {isB2BModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5 relative border border-brand-border">
            <button
              onClick={() => {
                setIsB2BModalOpen(false);
                setB2bSubmitted(false);
              }}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-text p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-1.5 bg-brand-accent/10 text-brand-accent px-2.5 py-0.5 rounded text-xs uppercase font-semibold">
                Corporate Procurement
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-text mt-2">
                Request Corporate Quotation / Catalog
              </h3>
              <p className="text-xs text-brand-muted mt-1">
                Receive architectural spec sheets, volume rates, and proforma invoices within 2 business hours.
              </p>
            </div>

            {b2bSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <p className="font-bold text-emerald-800 text-sm">Quote Request Submitted!</p>
                <p className="text-xs text-emerald-700">
                  Our Nairobi Commercial Lead will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form
                className="space-y-3.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setB2bSubmitted(true);
                }}
              >
                <div>
                  <label className="block text-[11px] uppercase font-bold text-brand-muted mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Standard Chartered / Tech Innovators Ltd"
                    className="w-full h-11 px-3.5 bg-brand-card rounded-lg text-brand-text text-xs border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-brand-muted mb-1">
                      Contact Person
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-11 px-3.5 bg-brand-card rounded-lg text-brand-text text-xs border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-brand-muted mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+254 7..."
                      className="w-full h-11 px-3.5 bg-brand-card rounded-lg text-brand-text text-xs border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase font-bold text-brand-muted mb-1">
                    Official Corporate Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="procurement@company.co.ke"
                    className="w-full h-11 px-3.5 bg-brand-card rounded-lg text-brand-text text-xs border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase font-bold text-brand-muted mb-1">
                    Requirement Overview
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Number of workstations, chair models, steel lockers, or fitout scope..."
                    className="w-full p-3 bg-brand-card rounded-lg text-brand-text text-xs border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Corporate Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
