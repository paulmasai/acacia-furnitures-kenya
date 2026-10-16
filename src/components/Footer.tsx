import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';
import { businessDetails } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-border pt-16 pb-12 border-t border-brand-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center text-brand-bg shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
                  <circle cx="12" cy="12" r="6" strokeOpacity="0.7" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wider text-white">
                  {businessDetails.name.split(' ')[0] || 'ACACIA'}
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-card -mt-1">
                  {businessDetails.name.split(' ').slice(1).join(' ') || 'Furniture Kenya'}
                </span>
              </div>
            </div>

            {businessDetails.tagline && (
              <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
                {businessDetails.tagline}
              </p>
            )}

            {/* Payment Methods */}
            {businessDetails.paymentMethods.length > 0 && (
              <div className="pt-2">
                <span className="text-xs uppercase font-semibold text-brand-card tracking-wider block mb-2">
                  Payment Methods
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {businessDetails.paymentMethods.map((method, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-brand-card/10 text-brand-card border border-brand-border/20"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Showroom Locations (only if configured) */}
          {businessDetails.showrooms.length > 0 && (
            <div className="space-y-3" id="showrooms">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-sans">
                Showrooms
              </h4>
              <div className="space-y-4 text-xs text-brand-muted">
                {businessDetails.showrooms.map((showroom, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-semibold text-brand-card flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      {showroom.name}
                    </p>
                    <p>{showroom.address}</p>
                    <p>{showroom.city}</p>
                    {showroom.hours && <p className="text-brand-accent text-[11px]">{showroom.hours}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <a href="#bestsellers" className="hover:text-brand-card transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#showrooms" className="hover:text-brand-card transition-colors">
                  Showrooms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (only if configured) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-sans">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-brand-muted">
              {businessDetails.phone && (
                <a
                  href={`tel:${businessDetails.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  {businessDetails.phone}
                </a>
              )}
              {businessDetails.email && (
                <a
                  href={`mailto:${businessDetails.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  {businessDetails.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-card/10 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p>
            © {new Date().getFullYear()} {businessDetails.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-brand-card">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              Solid Timber Guarantee
            </span>
            <span className="flex items-center gap-1 text-brand-card">
              <Heart className="w-3.5 h-3.5 text-red-400" />
              Authentic Craftsmanship
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
