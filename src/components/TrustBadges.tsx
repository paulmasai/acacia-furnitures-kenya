import React from 'react';
import { ShieldCheck, Truck, Hammer, CreditCard, Sparkles } from 'lucide-react';
import { TrustBadge, trustBadges } from '@/lib/content';

const iconMap = [Hammer, Truck, ShieldCheck, CreditCard, Sparkles];

interface TrustBadgesProps {
  badges?: TrustBadge[];
}

export default function TrustBadges({ badges = trustBadges }: TrustBadgesProps) {
  if (!badges || badges.length === 0) {
    return null;
  }

  return (
    <section className="bg-brand-card/70 border-b border-brand-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(badges.length, 4)} gap-8`}>
          {badges.map((badge, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent text-brand-bg flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-text font-sans tracking-wide">
                    {badge.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
