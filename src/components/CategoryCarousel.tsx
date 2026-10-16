'use client';

import React from 'react';
import Image from 'next/image';
import { Category, categories as defaultCategories } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

interface CategoryCarouselProps {
  categories?: Category[];
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
}

export default function CategoryCarousel({
  categories = defaultCategories,
  activeCategory = 'all',
  onSelectCategory,
}: CategoryCarouselProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-bg">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold">
              Curated Commercial Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text mt-1">
              Explore By Workspace Category
            </h2>
          </div>
          <a
            href="#bestsellers"
            className="text-xs font-semibold text-brand-accent hover:text-brand-accent-hover flex items-center gap-1 group"
          >
            <span>View full catalog</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Categories Grid (2 col mobile, 3 tablet, 6 desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.id)}
                className={`flex flex-col items-center group text-center space-y-3 p-4 rounded-xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-brand-card border-brand-accent shadow-md scale-102'
                    : 'bg-white border-brand-border hover:border-brand-accent/40 hover:shadow-md'
                }`}
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-brand-card p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative">
                  {cat.imageUrl ? (
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-contain p-1"
                    />
                  ) : (
                    <span className="text-xs font-bold text-brand-muted">
                      {cat.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {cat.name}
                  </h3>
                  {cat.count && (
                    <p className="text-[11px] text-brand-muted mt-0.5">{cat.count}</p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
