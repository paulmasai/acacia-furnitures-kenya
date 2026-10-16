'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, Star } from 'lucide-react';
import { heroContent, businessDetails } from '@/lib/content';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onOpenB2BModal?: () => void;
  videoUrl?: string;
}

export default function HeroSection({
  onExploreClick,
  onOpenB2BModal,
  videoUrl = heroContent.videoUrl,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-brand-card/60 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 border-b border-brand-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-6 space-y-6 z-10">
          {heroContent.badge && (
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span>{heroContent.badge}</span>
            </div>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-text font-bold tracking-tight leading-[1.15]">
            {heroContent.title}{' '}
            <span className="text-brand-accent italic">{heroContent.titleHighlight}</span>
          </h1>

          <p className="text-base text-brand-muted leading-relaxed max-w-xl">
            {heroContent.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#bestsellers"
              onClick={onExploreClick}
              className="h-12 px-7 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 group"
            >
              <span>{heroContent.exploreCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenB2BModal}
              className="h-12 px-6 bg-white hover:bg-brand-card text-brand-text border border-brand-border font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-accent" />
              <span>{heroContent.customCta}</span>
            </button>
          </div>

          {/* Metrics Grid */}
          {heroContent.stats && (
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/60">
              {heroContent.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="font-serif text-2xl font-bold text-brand-text flex items-center gap-1">
                    {stat.value}
                    {stat.value.includes('★') && (
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500 inline -mt-0.5" />
                    )}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Hero Visual Asset with Showroom Model Overlay */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-brand-border/30 border border-brand-border">
            {videoUrl ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            ) : heroContent.imageUrl ? (
              <Image
                src={heroContent.imageUrl}
                alt="Executive corporate office by Acacia Furnitures Kenya"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : null}

            {/* Floating Showroom Model Tag */}
            {heroContent.showroomCaption && (
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-brand-border flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted">
                    Nairobi Showroom
                  </p>
                  <p className="text-xs font-semibold text-brand-text">
                    {heroContent.showroomCaption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
