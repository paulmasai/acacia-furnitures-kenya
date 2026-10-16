'use client';

import React from 'react';
import Image from 'next/image';
import { Category, categories as defaultCategories } from '@/lib/content';

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
    <section className="py-14 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text">
              Browse Categories
            </h2>
          </div>
        </div>

        {/* Carousel / Circular Badges Grid */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide pt-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.id)}
                className="flex-shrink-0 flex flex-col items-center group text-center focus:outline-none"
              >
                <div
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-brand-accent ring-offset-2 scale-105'
                      : 'ring-2 ring-brand-border group-hover:ring-brand-accent/60 group-hover:scale-105'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-brand-card">
                    {cat.imageUrl ? (
                      <Image
                        src={cat.imageUrl}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-muted text-xs">
                        {cat.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
                <span className="mt-3 text-sm font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
                  {cat.name}
                </span>
                {cat.count && (
                  <span className="text-[11px] text-brand-muted font-medium">
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
