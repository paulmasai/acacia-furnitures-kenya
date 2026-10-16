import { Product } from './supabase';

export interface BusinessDetails {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  announcement: string;
  showrooms: {
    name: string;
    address: string;
    city: string;
    hours: string;
  }[];
  paymentMethods: string[];
}

export interface Category {
  id: string;
  name: string;
  count?: string;
  imageUrl?: string;
}

export interface TrustBadge {
  title: string;
  description: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  exploreCta: string;
  customCta: string;
  videoUrl?: string;
  imageUrl?: string;
}

// -------------------------------------------------------------
// BUSINESS DETAILS (Ready for your content)
// -------------------------------------------------------------
export const businessDetails: BusinessDetails = {
  name: 'Acacia Furniture Kenya',
  tagline: '',
  phone: '',
  whatsapp: '',
  email: '',
  announcement: '',
  showrooms: [],
  paymentMethods: ['M-PESA', 'Card', 'Bank Transfer'],
};

// -------------------------------------------------------------
// HERO CONTENT (Ready for your content)
// -------------------------------------------------------------
export const heroContent: HeroContent = {
  badge: '',
  title: '',
  titleHighlight: '',
  subtitle: '',
  exploreCta: 'Explore Collection',
  customCta: 'Custom Order',
  videoUrl: process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '',
  imageUrl: '',
};

// -------------------------------------------------------------
// CATEGORIES (Empty - ready for your list)
// -------------------------------------------------------------
export const categories: Category[] = [];

// -------------------------------------------------------------
// PRODUCTS CATALOG (Empty - ready for your products)
// -------------------------------------------------------------
export const products: Product[] = [];

// -------------------------------------------------------------
// VALUE PROPOSITIONS / TRUST BADGES (Ready for your content)
// -------------------------------------------------------------
export const trustBadges: TrustBadge[] = [];

// -------------------------------------------------------------
// WORKSHOP / ABOUT STORY (Optional - ready for your copy)
// -------------------------------------------------------------
export const storyContent = {
  badge: '',
  title: '',
  description: '',
  points: [] as { title: string; description: string }[],
};
