'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingBag, Eye, MessageCircle, Check, PackagePlus } from 'lucide-react';
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

  const categories = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
  const filterTabs = [
    { id: 'all', name: 'All Products' },
    ...categories.map((c) => ({ id: c, name: c.charAt(0).toUpperCase() + c.slice(1) })),
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

  const formatKsh = (amount: number) => {
    return 'KSh ' + amount.toLocaleString('en-KE');
  };

  return (
    <section id="bestsellers" className="py-16 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-text">
            Products Catalog
          </h2>

          {/* Filter Tabs (only if more than 1 category) */}
          {filterTabs.length > 2 && (
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    filter === tab.id
                      ? 'bg-brand-accent text-white shadow-sm'
                      : 'bg-brand-card text-brand-text hover:bg-brand-border/60'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Empty State when no products are provided yet */}
        {products.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-brand-border p-12 text-center max-w-md mx-auto my-12 bg-brand-card/40">
            <PackagePlus className="w-12 h-12 text-brand-muted mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
              Catalog Ready For Your Products
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              All placeholder items have been removed. Simply add your product details, images, prices, and specifications to <code className="text-brand-accent font-mono bg-brand-card px-1.5 py-0.5 rounded">src/lib/content.ts</code> or sync from Supabase.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedIds[product.id];
              return (
                <div
                  key={product.id}
                  className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-border/30">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-muted text-xs">
                        No Image
                      </div>
                    )}

                    {product.tag && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-brand-text/90 backdrop-blur-sm text-brand-bg text-[11px] font-bold uppercase tracking-wider rounded-md">
                        {product.tag}
                      </span>
                    )}

                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="w-9 h-9 rounded-full bg-brand-bg text-brand-text flex items-center justify-center hover:bg-brand-accent hover:text-white shadow-md transition-colors"
                        title="Quick Details"
                        aria-label="Quick Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {product.rating > 0 && (
                        <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-2">
                          <div className="flex items-center text-amber-600">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                          </div>
                          <span className="font-bold text-brand-text">{product.rating}</span>
                          {product.reviewsCount > 0 && (
                            <span>({product.reviewsCount} reviews)</span>
                          )}
                        </div>
                      )}

                      <h3 className="font-serif text-lg font-bold text-brand-text line-clamp-2 group-hover:text-brand-accent transition-colors">
                        {product.name}
                      </h3>

                      {product.description && (
                        <p className="mt-2 text-xs text-brand-muted line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      {(product.woodType || product.dimensions) && (
                        <div className="mt-3 pt-3 border-t border-brand-border/60 text-[11px] text-brand-muted flex flex-col gap-1">
                          {product.woodType && <span><strong>Timber:</strong> {product.woodType}</span>}
                          {product.dimensions && <span><strong>Size:</strong> {product.dimensions}</span>}
                        </div>
                      )}
                    </div>

                    {/* Pricing and Action CTAs */}
                    <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-xl font-bold text-brand-text">
                            {formatKsh(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-brand-muted line-through">
                              {formatKsh(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {businessDetails.whatsapp && (
                          <a
                            href={`https://wa.me/${businessDetails.whatsapp.replace(
                              /[^0-9]/g,
                              ''
                            )}?text=Hello,%20I'm%20interested%20in%20"${encodeURIComponent(
                              product.name
                            )}"%20at%20${formatKsh(product.price)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text hover:bg-brand-border/40 transition-colors"
                            title="Inquire on WhatsApp"
                            aria-label="Inquire on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-700" />
                          </a>
                        )}

                        <button
                          onClick={() => handleAdd(product)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                            isAdded
                              ? 'bg-emerald-800 text-white'
                              : 'bg-brand-accent hover:bg-brand-accent-hover text-white'
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
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-text/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-brand-bg rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-brand-border">
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
                {activeModalProduct.woodType && (
                  <span className="text-xs font-bold uppercase text-brand-accent tracking-wider">
                    {activeModalProduct.woodType}
                  </span>
                )}
                <h3 className="font-serif text-2xl font-bold text-brand-text mt-1">
                  {activeModalProduct.name}
                </h3>
                {activeModalProduct.description && (
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                )}
                <div className="mt-4 p-3 bg-brand-card rounded-lg text-xs space-y-1 text-brand-text">
                  {activeModalProduct.dimensions && <p><strong>Dimensions:</strong> {activeModalProduct.dimensions}</p>}
                  {activeModalProduct.finish && <p><strong>Finish:</strong> {activeModalProduct.finish}</p>}
                  {activeModalProduct.leadTime && <p><strong>Lead Time:</strong> {activeModalProduct.leadTime}</p>}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-brand-text">
                    {formatKsh(activeModalProduct.price)}
                  </span>
                  <button
                    onClick={() => {
                      handleAdd(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-brand-accent text-white font-medium text-xs hover:bg-brand-accent-hover"
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
