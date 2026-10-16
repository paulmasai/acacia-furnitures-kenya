'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingBag, Eye, Heart, MessageCircle, Check } from 'lucide-react';
import { Product } from '@/lib/supabase';
import { products as defaultProducts, businessDetails } from '@/lib/content';

interface BestsellersGridProps {
  products?: Product[];
  onAddToCart?: (product: Product) => void;
  selectedCategory?: string;
}

export default function BestsellersGrid({
  products = defaultProducts,
  onAddToCart,
  selectedCategory = 'all',
}: BestsellersGridProps) {
  const [filter, setFilter] = useState(selectedCategory);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});
  const [wishlist, setWishlist] = useState<{ [key: string]: boolean }>({});

  const categories = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
  const filterTabs = [
    { id: 'all', name: 'All Products' },
    ...categories.map((c) => ({
      id: c,
      name: c.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    })),
  ];

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter);

  const handleAdd = (product: Product) => {
    onAddToCart?.(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatKsh = (amount: number) => {
    return 'KSh ' + amount.toLocaleString('en-KE');
  };

  const getTagBadgeClass = (tag?: string) => {
    if (tag === 'Bestseller' || tag === 'Executive') return 'bg-brand-accent text-white';
    if (tag === 'Fire-Rated') return 'bg-red-700 text-white';
    if (tag === 'Heavy Duty') return 'bg-brand-text text-white';
    return 'bg-brand-text/90 text-white';
  };

  return (
    <section id="bestsellers" className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-card/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold">
              Proven High-Performance Assets
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-text mt-1">
              Our Most Demanded Workspace &amp; Security Pieces
            </h2>
          </div>
          <button
            onClick={() => setFilter('all')}
            className="text-xs font-semibold text-brand-accent hover:text-brand-accent-hover hidden sm:block"
          >
            View all bestsellers →
          </button>
        </div>

        {/* Filter Tabs */}
        {filterTabs.length > 2 && (
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'bg-white border border-brand-border text-brand-text hover:bg-brand-card'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];
            const isWished = wishlist[product.id];

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] w-full bg-brand-card overflow-hidden">
                    {product.tag && (
                      <span
                        className={`absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${getTagBadgeClass(
                          product.tag
                        )}`}
                      >
                        {product.tag}
                      </span>
                    )}

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to wishlist"
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-brand-text transition-colors shadow-sm"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWished ? 'fill-red-500 text-red-500' : 'text-brand-text'
                        }`}
                      />
                    </button>

                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-muted text-xs">
                        No Image Available
                      </div>
                    )}

                    {/* Quick View Button */}
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-white/90 text-brand-text opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                      title="Quick Specs"
                      aria-label="Quick Specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Specs */}
                  <div className="p-4 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted font-semibold block">
                      {product.category.replace(/-/g, ' ')}
                    </span>

                    <h3 className="font-serif text-base font-bold text-brand-text line-clamp-1 group-hover:text-brand-accent transition-colors">
                      {product.name}
                    </h3>

                    {product.description && (
                      <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    )}

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      {product.reviewsCount > 0 && (
                        <span className="text-[11px] text-brand-muted font-semibold">
                          ({product.reviewsCount} reviews)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA Actions */}
                <div className="p-4 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between pt-3 border-t border-brand-border/60">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-muted block">
                        Price (VAT Incl.)
                      </span>
                      <p className="font-serif text-lg font-bold text-brand-text">
                        {formatKsh(product.price)}
                      </p>
                    </div>
                    {product.inStock && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        In Stock
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${businessDetails.whatsapp.replace(
                        /[^0-9]/g,
                        ''
                      )}?text=Hello%20Acacia%20Furnitures,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(
                        product.name
                      )}%20(${formatKsh(product.price)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`h-10 border rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-800 text-white border-emerald-800'
                          : 'bg-white border-brand-border hover:bg-brand-card text-brand-text'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-brand-border">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-text"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-brand-card">
                {activeModalProduct.imageUrl ? (
                  <Image
                    src={activeModalProduct.imageUrl}
                    alt={activeModalProduct.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-muted">
                    No Image
                  </div>
                )}
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-brand-accent tracking-wider">
                  {activeModalProduct.woodType || activeModalProduct.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-text mt-1">
                  {activeModalProduct.name}
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {activeModalProduct.description}
                </p>
                <div className="mt-4 p-3 bg-brand-card rounded-lg text-xs space-y-1.5 text-brand-text">
                  {activeModalProduct.dimensions && (
                    <p><strong>Dimensions:</strong> {activeModalProduct.dimensions}</p>
                  )}
                  {activeModalProduct.finish && (
                    <p><strong>Finish:</strong> {activeModalProduct.finish}</p>
                  )}
                  {activeModalProduct.leadTime && (
                    <p><strong>Availability:</strong> {activeModalProduct.leadTime}</p>
                  )}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-brand-muted uppercase block font-semibold">
                      Price (VAT Incl.)
                    </span>
                    <span className="font-serif text-2xl font-bold text-brand-text">
                      {formatKsh(activeModalProduct.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleAdd(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-brand-accent text-white font-medium text-xs hover:bg-brand-accent-hover shadow-sm"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
