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
import { products, categories, trustBadges, businessDetails, storyContent } from '@/lib/content';
import { ShoppingBag, X, MessageCircle, CheckCircle2 } from 'lucide-react';

interface CartItem extends Product {
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
    )}\n\n*Total:* ${formatKsh(cartTotal)}\n\nPlease advise on payment and delivery.`;
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
        <HeroSection />

        {/* Value Proposition Bar (only if badges are configured) */}
        <TrustBadges badges={trustBadges} />

        {/* Category Carousel (only if categories are configured) */}
        <CategoryCarousel
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(id) => {
            setActiveCategory(id);
            const el = document.getElementById('bestsellers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Optional Workshop / Story Section (only if configured) */}
        {storyContent.title && (
          <section className="py-20 bg-brand-card/50 border-y border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {storyContent.badge && (
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-accent">
                    {storyContent.badge}
                  </span>
                )}
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text mt-2 leading-tight">
                  {storyContent.title}
                </h2>
                {storyContent.description && (
                  <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                    {storyContent.description}
                  </p>
                )}

                {storyContent.points.length > 0 && (
                  <div className="space-y-4 pt-6">
                    {storyContent.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-brand-text">{pt.title}</h4>
                          <p className="text-xs text-brand-muted mt-0.5">{pt.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Products Catalog */}
        <BestsellersGrid
          products={products}
          selectedCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* Cart Slide-Over Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-brand-text/50 backdrop-blur-sm transition-opacity">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-brand-bg shadow-2xl flex flex-col border-l border-brand-border">
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
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 rounded-xl border border-brand-border bg-brand-card"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-brand-border/40 flex-shrink-0">
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

                  {businessDetails.whatsapp ? (
                    <a
                      href={generateWhatsAppCheckoutLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Checkout via WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3.5 px-4 rounded-xl bg-brand-accent/50 text-white font-bold text-sm cursor-not-allowed"
                    >
                      Checkout (WhatsApp number not set)
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
