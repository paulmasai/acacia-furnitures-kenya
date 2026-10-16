'use client';

import React from 'react';
import { ArrowRight, Sparkles, TreePine } from 'lucide-react';
import { heroContent, businessDetails } from '@/lib/content';

interface HeroSectionProps {
  onExploreClick?: () => void;
  videoUrl?: string;
}

export default function HeroSection({
  onExploreClick,
  videoUrl = heroContent.videoUrl,
}: HeroSectionProps) {
  const hasCustomMedia = Boolean(videoUrl || heroContent.imageUrl);

  return (
    <section className="relative overflow-hidden bg-brand-text text-brand-bg min-h-[75vh] flex items-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35 scale-105"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : heroContent.imageUrl ? (
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{ backgroundImage: `url('${heroContent.imageUrl}')` }}
          />
        ) : (
          <div className="w-full h-full bg-brand-text opacity-95" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-brand-text/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          {heroContent.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card/15 border border-brand-border/30 text-brand-card text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <TreePine className="w-4 h-4 text-brand-card" />
              <span>{heroContent.badge}</span>
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            {heroContent.title || businessDetails.name}
            {heroContent.titleHighlight && (
              <>
                <br />
                <span className="text-brand-card">{heroContent.titleHighlight}</span>
              </>
            )}
          </h1>

          {heroContent.subtitle && (
            <p className="mt-6 text-base sm:text-lg text-brand-border leading-relaxed max-w-xl">
              {heroContent.subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#bestsellers"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-base transition-all duration-200 shadow-md group"
            >
              <span>{heroContent.exploreCta || 'Explore Collection'}</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {businessDetails.whatsapp && (
              <a
                href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-card/10 hover:bg-brand-card/20 text-brand-card font-medium text-base border border-brand-border/30 backdrop-blur-sm transition-colors"
              >
                <Sparkles className="mr-2 w-4 h-4 text-brand-card" />
                {heroContent.customCta || 'Custom Inquiry'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
