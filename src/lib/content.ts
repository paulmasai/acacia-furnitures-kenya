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
  showroomCaption?: string;
  stats?: { value: string; label: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

// -------------------------------------------------------------
// BUSINESS DETAILS (From Acacia SEO Catalog)
// -------------------------------------------------------------
export const businessDetails: BusinessDetails = {
  name: 'Acacia Furniture Kenya',
  tagline:
    'Direct manufacturer and importer of ergonomic office seating, executive desks, heavy-duty steel safes, and event chairs based in Industrial Area, Nairobi.',
  phone: '+254 703 404 563',
  whatsapp: '+254 703 404 563',
  email: 'sales@acaciafurniture.co.ke',
  announcement:
    'Pay on Delivery in Nairobi • Countrywide Shipping via G4S / Wells Fargo • 1-Year Warranty',
  showrooms: [
    {
      name: 'Nairobi Main Hub & Showroom',
      address: 'Industrial Area, Nairobi',
      city: 'Nairobi, Kenya',
      hours: 'Open Mon - Sat: 8:00 AM – 6:00 PM',
    },
  ],
  paymentMethods: [
    'Pay on Delivery (Nairobi)',
    'Lipa Na M-Pesa',
    'Bank Wire / RTGS',
    'Cheque Prepayment (Outside Nairobi)',
  ],
};

// -------------------------------------------------------------
// HERO CONTENT
// -------------------------------------------------------------
export const heroContent: HeroContent = {
  badge: 'Direct Manufacturer & Corporate Importer • Industrial Area, Nairobi',
  title: 'Commercial Office &',
  titleHighlight: 'Event Furniture',
  subtitle:
    'Reliable ergonomic mesh chairs, Z-leg executive desks, heavy-duty digital safes, and banquet conference seating. Hand-inspected with 1-year warranty and bulk rates.',
  exploreCta: 'Explore Products',
  customCta: 'Request Bulk Quote',
  videoUrl: process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyr0YLxeaLNIUNaTiJ2j1uO7LDsngLFfuxJgdasOHUlbmumMkqgmjNVImKFEjkVqXL4-791DQJePjzHUyKb4m5xkh3wzCKGOZ95ui9Kb5lGVDEYYykEOW6gdeaGpjbqJapmr6AXmtzv5T6CVcAuVzUrLJYiAaHC704a1czE-WhyZNTy66gxKzuOXjkdvw0s9cfSSqbqpr9jRHdgutO7UlfnUNrs6hXCQNnpTCcEKWJn_ks2bX_yvJU',
  showroomCaption: 'Nairobi Commercial Showroom • Industrial Area',
  stats: [
    { value: '17+', label: 'Catalog Models' },
    { value: '1 Year', label: 'Equipment Warranty' },
    { value: 'Pay on Delivery', label: 'Nairobi Orders' },
  ],
};

// -------------------------------------------------------------
// CATEGORIES (From SEO Catalog)
// -------------------------------------------------------------
export const categories: Category[] = [
  {
    id: 'office-chairs',
    name: 'Office Chairs',
    count: '7 Models',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
  },
  {
    id: 'desks',
    name: 'Office Desks',
    count: '3 Models',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3IXlDMiqFya70xmufQn-4RamYVGnYHEvhUu0YEVytZ0EMAau6h1kW7sYONUgF0Qxag21gft17MH1Ik5HDkxU_H9gzpiwLDk0x2KGVg_pHjwBrydKZWW2mhDmrD7boThKmT_mJ3NRNlAODp4n1uYR_s06W18HMA8WAS7A4MqoWfVoxSTQF6u3PKaDoN_IkHD-CNmtIwGOVAHRqSMuvwALZE_CVfwPLQ2ue0OIZfM-SVdsx25WndvkY',
  },
  {
    id: 'safes',
    name: 'Digital Safes',
    count: '3 Models',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyavrJo6_z1r7gHmwqr40irLmNTPVXd7yeb6At1P8F-yMOC0wFI4GkoJhXKex9XCs3ir_ev4WJCCrdizUiIziFsLsNq7hPq4s34rG13fiOCs-qO43jHUR7SLYuJpSwMVRQlm82g5ZoYc0umTZdci-SnOnjREdirP2gL658Zt0cSt_BXq7njX1Rh4X-IIaj8030HSII88pixGaLqvEjDI0OllJ2qBu9krjTG0AgikwgmhZX-flgZ4r',
  },
  {
    id: 'church-event-chairs',
    name: 'Church & Event Chairs',
    count: '4 Models',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
  },
];

// -------------------------------------------------------------
// VALUE PROPOSITIONS / TRUST BADGES
// -------------------------------------------------------------
export const trustBadges: TrustBadge[] = [
  {
    title: 'Pay on Delivery in Nairobi',
    description: 'Inspect your furniture upon arrival before payment. Countrywide courier dispatch available.',
  },
  {
    title: '1-Year Equipment Warranty',
    description: 'Full one-year structural warranty on office desks, mesh chairs, and heavy steel safes.',
  },
  {
    title: 'Competitive Bulk Quotations',
    description: 'Tiered volume pricing for church halls, corporate office fitouts, and schools.',
  },
  {
    title: 'Flexible Payment Methods',
    description: 'M-Pesa, RTGS Bank Transfer, or Company Cheque with official KRA tax compliance.',
  },
];

// -------------------------------------------------------------
// FULL 17-PRODUCT CATALOG (From Official SEO Catalog)
// -------------------------------------------------------------
export const products: Product[] = [
  // 1. Church & Event Chairs
  {
    id: 'acf-chr-001',
    name: 'Stackable Padded Chairs (Red & Blue)',
    category: 'church-event-chairs',
    price: 4500,
    woodType: 'Metal frame; padded upholstery',
    finish: 'Red / Blue with plastic leg wraps',
    dimensions: 'Stackable standard size',
    rating: 4.9,
    reviewsCount: 48,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Stackable',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
    description:
      'Seat guests comfortably while keeping unused chairs easy to stack. Padded seat and backrest with protective plastic wraps on legs. Ideal for church halls, school assemblies, training rooms and event venues.',
  },
  {
    id: 'acf-chr-002',
    name: 'Banquet / Conference Chairs (Gold Frame)',
    category: 'church-event-chairs',
    price: 3500,
    woodType: 'Gold-colour metal frame; thick padded cushion',
    finish: 'Maroon or Teal with Gold Frame',
    dimensions: 'Banquet standard size',
    rating: 4.9,
    reviewsCount: 62,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Banquet',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
    description:
      'Give banquet and meeting guests a cushioned place to sit. Gold-colour metal frame and thick padded seat. Ideal for hotel function rooms, conference venues, churches and event hire operators.',
  },
  {
    id: 'acf-chr-003',
    name: 'Diamond-Patterned Conference Chairs',
    category: 'church-event-chairs',
    price: 2350,
    woodType: 'Metal frame; padded upholstery',
    finish: 'Royal Blue / Red with Gold-colour frame',
    dimensions: 'Conference standard size',
    rating: 4.8,
    reviewsCount: 75,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Value Choice',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
    description:
      'Seat a larger meeting or congregation with a straightforward padded chair. Diamond-stitched padded upholstery on a gold-colour metal frame. Listed for schools, church halls, SACCO meetings and conference spaces.',
  },
  {
    id: 'acf-chr-004',
    name: 'Church Chairs with Armrests (Stackable)',
    category: 'church-event-chairs',
    price: 5500,
    woodType: 'Reinforced metal frame; fabric upholstery',
    finish: 'Burgundy fabric with armrests',
    dimensions: 'Armchair stackable format',
    rating: 5.0,
    reviewsCount: 39,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Armrests',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
    description:
      'Offer seated support during longer services while retaining a stackable format. Built-in armrests, thick padded seat and burgundy fabric upholstery. Listed for church sanctuaries, auditoriums and prayer halls.',
  },

  // 2. Safes
  {
    id: 'acf-saf-060',
    name: 'Digital Safe Box (60 kg Heavy Duty)',
    category: 'safes',
    price: 22500,
    woodType: 'Heavy-duty steel casing & motorized bolts',
    finish: 'Digital Keypad & Dual Key override',
    dimensions: '60 kg solid construction',
    rating: 4.9,
    reviewsCount: 52,
    inStock: true,
    leadTime: 'In Stock • Secure Courier Available',
    tag: 'Heavy Duty',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyavrJo6_z1r7gHmwqr40irLmNTPVXd7yeb6At1P8F-yMOC0wFI4GkoJhXKex9XCs3ir_ev4WJCCrdizUiIziFsLsNq7hPq4s34rG13fiOCs-qO43jHUR7SLYuJpSwMVRQlm82g5ZoYc0umTZdci-SnOnjREdirP2gL658Zt0cSt_BXq7njX1Rh4X-IIaj8030HSII88pixGaLqvEjDI0OllJ2qBu9krjTG0AgikwgmhZX-flgZ4r',
    description:
      'Keep access to cash and documents controlled with a keypad and keys. Advertised 60 kg safe weight with digital keypad and dual-key security feature. Listed for small offices, retail counters, SACCOs and homes.',
  },
  {
    id: 'acf-saf-070',
    name: 'Digital Safe Box (70 kg Heavy Duty)',
    category: 'safes',
    price: 25500,
    woodType: 'Reinforced steel body & lock mechanism',
    finish: 'Digital Keypad & Emergency Master Keys',
    dimensions: '70 kg solid construction',
    rating: 5.0,
    reviewsCount: 67,
    inStock: true,
    leadTime: 'In Stock • Secure Courier Available',
    tag: 'Heavy Duty',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyavrJo6_z1r7gHmwqr40irLmNTPVXd7yeb6At1P8F-yMOC0wFI4GkoJhXKex9XCs3ir_ev4WJCCrdizUiIziFsLsNq7hPq4s34rG13fiOCs-qO43jHUR7SLYuJpSwMVRQlm82g5ZoYc0umTZdci-SnOnjREdirP2gL658Zt0cSt_BXq7njX1Rh4X-IIaj8030HSII88pixGaLqvEjDI0OllJ2qBu9krjTG0AgikwgmhZX-flgZ4r',
    description:
      'Organise controlled access to office records and valuables. Advertised 70 kg solid weight with digital keypad and override key access. Recommended for SACCO branches, administrative offices, shops and homes.',
  },
  {
    id: 'acf-saf-080',
    name: 'Digital Safe Box (80 kg Heavy Duty)',
    category: 'safes',
    price: 27500,
    woodType: 'Maximum gauge steel casing & reinforced door',
    finish: 'Digital Keypad + Master Key security',
    dimensions: '80 kg solid construction',
    rating: 5.0,
    reviewsCount: 84,
    inStock: true,
    leadTime: 'In Stock • Secure Courier Available',
    tag: 'Maximum Security',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyavrJo6_z1r7gHmwqr40irLmNTPVXd7yeb6At1P8F-yMOC0wFI4GkoJhXKex9XCs3ir_ev4WJCCrdizUiIziFsLsNq7hPq4s34rG13fiOCs-qO43jHUR7SLYuJpSwMVRQlm82g5ZoYc0umTZdci-SnOnjREdirP2gL658Zt0cSt_BXq7njX1Rh4X-IIaj8030HSII88pixGaLqvEjDI0OllJ2qBu9krjTG0AgikwgmhZX-flgZ4r',
    description:
      'Plan a dedicated place for records and valuables with high-capacity security. Advertised 80 kg safe weight with digital keypad and key access. Listed for office records rooms, schools, shops and SACCO branches.',
  },

  // 3. Desks
  {
    id: 'acf-dsk-001',
    name: 'Modern Z-Leg Executive Office Desk Set',
    category: 'desks',
    price: 18500,
    woodType: 'Wooden desktop; Z-shaped steel legs',
    finish: 'Includes lockable 3-drawer side pedestal',
    dimensions: 'Executive workstation with return pedestal',
    rating: 5.0,
    reviewsCount: 68,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Executive',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3IXlDMiqFya70xmufQn-4RamYVGnYHEvhUu0YEVytZ0EMAau6h1kW7sYONUgF0Qxag21gft17MH1Ik5HDkxU_H9gzpiwLDk0x2KGVg_pHjwBrydKZWW2mhDmrD7boThKmT_mJ3NRNlAODp4n1uYR_s06W18HMA8WAS7A4MqoWfVoxSTQF6u3PKaDoN_IkHD-CNmtIwGOVAHRqSMuvwALZE_CVfwPLQ2ue0OIZfM-SVdsx25WndvkY',
    description:
      'Keep daily desk items close at hand with an accompanying storage unit. Z-shaped steel leg frame and matching lockable 3-drawer pedestal. Recommended for manager offices, reception back offices and home workspaces.',
  },
  {
    id: 'acf-dsk-002',
    name: 'Metallic Geometric Frame Office Desk',
    category: 'desks',
    price: 10500,
    woodType: 'Wooden top; geometric metal frame',
    finish: 'Black wooden top with white geometric frame',
    dimensions: 'Compact office workstation',
    rating: 4.8,
    reviewsCount: 34,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Geometric Modern',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGCvEsk6ZUgwNgJZz1Emjo_5Vy4tfBbh1Yh-iTVfHkP3BMcFfOmTMtvxOX2OIrcGeDqOORcoMzbYLkLESWMy40NlPKDblNu8Icb4cy88zzeAVLGi1KM2OmaXNzA-jMQqkir695SkXbvWfL5qxzYwQWR3LTNvu6g377M-FR5OfQCCGi4I5f5IkPo7fYnUalPSDURqHyxWROctsOeRmmjegUO33rEtgXNePsrI5I5YWuN12sIS7Xbmgz',
    description:
      'Set up a compact work surface with an open frame underneath. Black wooden top supported by a white geometric metal leg structure. Listed for home studies, shared offices, reception areas and workstations.',
  },
  {
    id: 'acf-dsk-003',
    name: 'Minimalist Z-Leg Office Desk (1.2 m)',
    category: 'desks',
    price: 8500,
    woodType: 'Wooden top; black Z-shaped steel legs',
    finish: 'Dual cable grommets for clean wire management',
    dimensions: 'Top length: 1.2 m',
    rating: 4.8,
    reviewsCount: 51,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Compact Workstation',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGCvEsk6ZUgwNgJZz1Emjo_5Vy4tfBbh1Yh-iTVfHkP3BMcFfOmTMtvxOX2OIrcGeDqOORcoMzbYLkLESWMy40NlPKDblNu8Icb4cy88zzeAVLGi1KM2OmaXNzA-jMQqkir695SkXbvWfL5qxzYwQWR3LTNvu6g377M-FR5OfQCCGi4I5f5IkPo7fYnUalPSDURqHyxWROctsOeRmmjegUO33rEtgXNePsrI5I5YWuN12sIS7Xbmgz',
    description:
      'Keep monitor and power leads tidier on a 1.2 metre workstation. Features two cable grommets and sturdy black Z-shaped steel legs. Listed for home offices, school administration and small business teams.',
  },

  // 4. Office Chairs
  {
    id: 'acf-ofc-001',
    name: 'High-Back Ergonomic Mesh Executive Chair',
    category: 'office-chairs',
    price: 15500,
    woodType: 'Mesh upholstery; five-star caster base',
    finish: 'Adjustable headrest; 3D armrests; lumbar support',
    dimensions: 'High-back ergonomic executive',
    rating: 5.0,
    reviewsCount: 94,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Executive Bestseller',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
    description:
      'Adjust more contact points for long periods at a desk. Black mesh back, adjustable headrest, 3D armrests and dynamic lumbar support. Listed for office managers, remote workers and executive desks.',
  },
  {
    id: 'acf-ofc-002',
    name: 'Ergonomic Mesh Office Chair with Headrest',
    category: 'office-chairs',
    price: 7500,
    woodType: 'Mesh back; curved lumbar frame; chrome caster base',
    finish: 'Breathable mesh with headrest',
    dimensions: 'Standard staff ergonomic',
    rating: 4.8,
    reviewsCount: 63,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Popular',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfhnHYb5xfOHy-wU08CaEJfhEmJOQOdPGGM4-IuKTorGkBNGN3edD5xNhmoEw-GsuJ438lHaEyYXRdkLUzqVshQ0yjlnz2WbzHda892KmP7CRvv5RUae6ycSuyGoZkrjpwoBTEv53RSuxb-uL9OALTzCygPS8h_T9ftU29tdycoPtJSFYBeC4sY_aBUWSs5LRk4hfIJTOSRzHrbbAXYMz7RKemWbLnJ4-199n8d3y5okTca0n9U7PI',
    description:
      'Give staff a mesh-backed chair with a dedicated place to rest the head. Curved lumbar frame with chrome-finish five-star caster base. Listed for staff desks, reception back offices and study spaces.',
  },
  {
    id: 'acf-ofc-003',
    name: 'Medium Back Ergonomic Mesh Chair',
    category: 'office-chairs',
    price: 8500,
    woodType: 'Mesh upholstery; durable nylon base',
    finish: 'Pneumatic seat-height adjustment & fixed arms',
    dimensions: 'Medium back workstation size',
    rating: 4.8,
    reviewsCount: 47,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Everyday Staff',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfhnHYb5xfOHy-wU08CaEJfhEmJOQOdPGGM4-IuKTorGkBNGN3edD5xNhmoEw-GsuJ438lHaEyYXRdkLUzqVshQ0yjlnz2WbzHda892KmP7CRvv5RUae6ycSuyGoZkrjpwoBTEv53RSuxb-uL9OALTzCygPS8h_T9ftU29tdycoPtJSFYBeC4sY_aBUWSs5LRk4hfIJTOSRzHrbbAXYMz7RKemWbLnJ4-199n8d3y5okTca0n9U7PI',
    description:
      'Set a practical seat height for everyday computer work. Black mesh back, fixed armrests and smooth pneumatic height adjustment. Listed for staff workstations, school offices and compact desks.',
  },
  {
    id: 'acf-ofc-004',
    name: 'High-Back Mesh Desk Chair with T-Arms',
    category: 'office-chairs',
    price: 11500,
    woodType: 'Mesh upholstery; nylon caster base',
    finish: 'Headrest and fixed T-shaped armrests',
    dimensions: 'High-back desk size',
    rating: 4.9,
    reviewsCount: 56,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'T-Arm Mesh',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
    description:
      'Support desk work with a headrest and simple fixed arms. High mesh back, supportive headrest and sturdy T-armrests. Recommended for manager desks, home offices and administrative stations.',
  },
  {
    id: 'acf-ofc-005',
    name: 'Executive Leather Director Swivel Chair',
    category: 'office-chairs',
    price: 19500,
    woodType: 'Leather upholstery with wood-look accents',
    finish: 'Black leather with executive timber trim',
    dimensions: 'High-back director size',
    rating: 5.0,
    reviewsCount: 78,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Director Leather',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
    description:
      'Set up a director’s desk with a commanding high-back swivel chair. Deep black leather-look upholstery with elegant wood-look accents. Listed for private offices, boardrooms and executive suites.',
  },
  {
    id: 'acf-ofc-006',
    name: 'Executive Mesh Office Chair with Lumbar Support',
    category: 'office-chairs',
    price: 15500,
    woodType: 'High-tension mesh; silver-colour frame accents',
    finish: 'Distinct lumbar support & adjustable neck cushion',
    dimensions: 'Executive mesh size',
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Lumbar Care',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
    description:
      'Choose a mesh chair with an advanced lumbar and neck support setup. High-tension mesh back, curved lumbar cushion and adjustable headrest. Listed for office managers and extended desk work.',
  },
  {
    id: 'acf-ofc-007',
    name: 'High-Back Mesh Office Chair',
    category: 'office-chairs',
    price: 12500,
    woodType: 'Mesh upholstery; reinforced nylon base',
    finish: 'Adjustable headrest and seat-height adjustment',
    dimensions: 'High-back ergonomic',
    rating: 4.8,
    reviewsCount: 54,
    inStock: true,
    leadTime: 'In Stock • Nairobi Delivery',
    tag: 'Ergonomic',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfhnHYb5xfOHy-wU08CaEJfhEmJOQOdPGGM4-IuKTorGkBNGN3edD5xNhmoEw-GsuJ438lHaEyYXRdkLUzqVshQ0yjlnz2WbzHda892KmP7CRvv5RUae6ycSuyGoZkrjpwoBTEv53RSuxb-uL9OALTzCygPS8h_T9ftU29tdycoPtJSFYBeC4sY_aBUWSs5LRk4hfIJTOSRzHrbbAXYMz7RKemWbLnJ4-199n8d3y5okTca0n9U7PI',
    description:
      'Set the headrest and seat height to suit your desk comfort. High mesh back, adjustable headrest and smooth gas-lift seat adjustment. Listed for corporate workstations, study rooms and home offices.',
  },
];

// -------------------------------------------------------------
// CORPORATE FIT-OUT STORY
// -------------------------------------------------------------
export const storyContent = {
  badge: 'Enterprise & Institutional Supply • Nairobi',
  title: 'Bulk Supply for Offices, Churches, SACCOs & Institutions',
  description:
    'Need 20+ banquet chairs for a sanctuary, 10 executive desks for a branch, or heavy-duty digital safes? Speak directly with our sales team in Industrial Area, Nairobi for volume tier quotations and delivery scheduling.',
  points: [
    {
      title: 'Pay on Delivery in Nairobi',
      description: 'Confirm live stock and inspect your furniture on delivery before payment.',
    },
    {
      title: '1-Year Warranty & Parts',
      description: 'All items carry an official one-year warranty with direct customer support.',
    },
    {
      title: 'Upcountry Prepayment',
      description: 'Accepted via M-Pesa, Bank Transfer, or Cheque with reliable courier handling.',
    },
  ],
};

// -------------------------------------------------------------
// TESTIMONIALS
// -------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    quote:
      'We ordered 150 banquet conference chairs for our church hall. The gold frame and thick maroon cushions are top quality, and delivery to Industrial Area was seamless.',
    author: 'Pastor Samuel Karanja',
    role: 'Senior Pastor',
    company: 'Grace Sanctuary Nairobi',
  },
  {
    quote:
      'The 80 kg digital safe and executive Z-leg desk sets we installed for our SACCO branches have been exceptionally sturdy. Pay on delivery in Nairobi gave us total confidence.',
    author: 'Beatrice Njeri',
    role: 'Branch Manager',
    company: 'Nairobi Enterprise SACCO',
  },
  {
    quote:
      'Equipped our entire software development team with High-Back Mesh Executive Chairs. Lumbar support and 3D armrests have dramatically improved workday posture.',
    author: 'Brian Kiprono',
    role: 'Operations Lead',
    company: 'TechHub Westlands',
  },
];
