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
// BUSINESS DETAILS (From Stitch Project)
// -------------------------------------------------------------
export const businessDetails: BusinessDetails = {
  name: 'Acacia Furnitures Kenya',
  tagline:
    "East Africa's premier supplier of luxury commercial workspace furniture, ergonomic seating, heavy-duty secure steel storage, and bespoke corporate boardroom suites.",
  phone: '+254 700 123 456',
  whatsapp: '+254 700 123 456',
  email: 'corporate@acaciafurnitures.co.ke',
  announcement:
    'Free Nairobi Delivery • Countrywide Shipping via G4S / Wells Fargo • Lipa na M-Pesa Available',
  showrooms: [
    {
      name: 'Mombasa Road Main Showroom',
      address: 'Enterprise Plaza, Unit B2, Mombasa Rd',
      city: 'Nairobi, Kenya',
      hours: 'Open Mon - Sat: 8:00 AM – 6:00 PM',
    },
    {
      name: 'Westlands Corporate Studio',
      address: 'Woodvale Grove, 4th Floor',
      city: 'Westlands, Nairobi',
      hours: 'By Appointment & Private Consultations',
    },
  ],
  paymentMethods: [
    'Lipa Na M-Pesa (Till 892 410)',
    'Paybill 400 200',
    'RTGS / Bank Transfer',
    'KRA ETR Compliant Invoices',
  ],
};

// -------------------------------------------------------------
// HERO CONTENT
// -------------------------------------------------------------
export const heroContent: HeroContent = {
  badge: 'Direct Manufacturer & Corporate Importer • Nairobi',
  title: 'Premium Workspace &',
  titleHighlight: 'Storage Solutions',
  subtitle:
    "Equipping Kenya's forward-thinking corporations, executive suites, and private offices with heavy-duty commercial steel and solid timber craft.",
  exploreCta: 'Shop Office Seating',
  customCta: 'Request B2B Catalog',
  videoUrl: process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyr0YLxeaLNIUNaTiJ2j1uO7LDsngLFfuxJgdasOHUlbmumMkqgmjNVImKFEjkVqXL4-791DQJePjzHUyKb4m5xkh3wzCKGOZ95ui9Kb5lGVDEYYykEOW6gdeaGpjbqJapmr6AXmtzv5T6CVcAuVzUrLJYiAaHC704a1czE-WhyZNTy66gxKzuOXjkdvw0s9cfSSqbqpr9jRHdgutO7UlfnUNrs6hXCQNnpTCcEKWJn_ks2bX_yvJU',
  showroomCaption: 'Prestige Suite × Mombasa Rd (Nairobi Showroom Model)',
  stats: [
    { value: '10K+', label: 'Workspaces Equipped' },
    { value: '4.9★', label: 'Corporate Rating' },
    { value: '100%', label: 'Commercial Grade' },
  ],
};

// -------------------------------------------------------------
// CATEGORIES
// -------------------------------------------------------------
export const categories: Category[] = [
  {
    id: 'executive-chairs',
    name: 'Office Chairs',
    count: '42 Models',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfhnHYb5xfOHy-wU08CaEJfhEmJOQOdPGGM4-IuKTorGkBNGN3edD5xNhmoEw-GsuJ438lHaEyYXRdkLUzqVshQ0yjlnz2WbzHda892KmP7CRvv5RUae6ycSuyGoZkrjpwoBTEv53RSuxb-uL9OALTzCygPS8h_T9ftU29tdycoPtJSFYBeC4sY_aBUWSs5LRk4hfIJTOSRzHrbbAXYMz7RKemWbLnJ4-199n8d3y5okTca0n9U7PI',
  },
  {
    id: 'office-desks',
    name: 'Executive Desks',
    count: '28 Designs',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGCvEsk6ZUgwNgJZz1Emjo_5Vy4tfBbh1Yh-iTVfHkP3BMcFfOmTMtvxOX2OIrcGeDqOORcoMzbYLkLESWMy40NlPKDblNu8Icb4cy88zzeAVLGi1KM2OmaXNzA-jMQqkir695SkXbvWfL5qxzYwQWR3LTNvu6g377M-FR5OfQCCGi4I5f5IkPo7fYnUalPSDURqHyxWROctsOeRmmjegUO33rEtgXNePsrI5I5YWuN12sIS7Xbmgz',
  },
  {
    id: 'steel-filing-cabinets',
    name: 'Steel Cabinets',
    count: '19 Configurations',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBjGdPL_R8lrPoftf5MVm8rGl12tz-rpOaftHMIuuWgYyrii0B3E3rMN_duOfx7BVXUFS3qW7EIHQkGnsYiifnsG606JjjaYw4H4zP3VXFJS4wD1rYP7nmhAwkSrqqC0fUGJeDu4YCrYPsufgUkrLOFCiRvh6WC1vwp2SzncKl926DYTLfhxEu2TLPklcgfsgwKCGGB-J_K0SY09zwHnhd5EneHo7G82jADZr5NXrtukuY8omcaknH',
  },
  {
    id: 'fireproof-safes',
    name: 'Steel Safes',
    count: 'UL Fire-Rated',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxofocuFsQVKr7lE6Nk9808L2CyVj9wUkvP7ZOd9NJljZdWgl1tGYqQC6GFgOVUkDmdofLO9JdQJRzHKcLVallGSn8QYZSzLpJMhwhJU5C8LkRMLULQD3b9C2AAqETC1mHBU4b8_oZciHh1u4CJIVrFcBttZuNfU3LKnRVlUAXVtEC4RE8CeSYTZ8Ij7PvAP-y-5LCZjlHeGwkXrqKNeYEjGHxRuNLtc6F1aA371WJ1KK1PYSYw_Ke',
  },
  {
    id: 'solid-dining-sets',
    name: 'Dining & Boardroom',
    count: 'Solid Hardwood',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZRsUMKuwX0zdxG4PTlREu8TpKHplUTH8CYN6PxhLetHPAFFY5urIbsUvm7nEjw35EhOgzSAfsFRKZ5ckj3Tlbv8cQowV35cxH0eKJS4iGmmFxBC8L3Y4W6Ehu6H_yYoIPaedVqUHzs82_T7qvk-zWVho7e9Rz6Jm4LmrOnS09FH6diAGH_4RAJr0aBl3XFhV27zc-kym1ELRPnGB8p0W9xNr7wpakJbde22c3kcWUdyMq3HlILA',
  },
  {
    id: 'commercial-fit-outs',
    name: 'Fit-Outs',
    count: 'Turnkey B2B',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-7_5lXi7WJ6EkASbG0dyiCktuPkTX5SHbkRwBZT5Dfd0Gb33_pJQQFTeXf5tKcoTsaSI3faL4VnNdCe5u6MyMZter28WQQAYStu3hJ0WT5-pTKf05I_XFZ6EDb2V0L_zt0KF8mP7WBCs5Dze4Z4kDlb4ZhDSlugZAHhGWtmCaBZx7VL2apfEAoeatvx11BjW7-MCg9Qbf4UPVWE8nUaPUdMVQzDJ_i_-V90O57h8e5W8p-bmvBmMz',
  },
];

// -------------------------------------------------------------
// VALUE PROPOSITIONS / TRUST BADGES
// -------------------------------------------------------------
export const trustBadges: TrustBadge[] = [
  {
    title: 'Heavy-Duty Steel & Timber',
    description: 'Built to endure decades of continuous commercial enterprise wear.',
  },
  {
    title: 'Same-Day Nairobi Delivery',
    description: 'Dispatched directly from our industrial showroom and assembly hub.',
  },
  {
    title: 'Lipa na M-Pesa & Invoicing',
    description: 'Instant M-Pesa Till payments, RTGS bank transfer, and verified ETR invoices.',
  },
  {
    title: '1-Year Commercial Warranty',
    description: 'Comprehensive Kenya warranty with direct spare parts support.',
  },
];

// -------------------------------------------------------------
// COMMERCIAL PRODUCTS CATALOG
// -------------------------------------------------------------
export const products: Product[] = [
  {
    id: 'exec-mesh-chair',
    name: 'Executive High-Back Mesh Chair',
    category: 'executive-chairs',
    price: 18500,
    woodType: 'Breathable Korean Mesh & Chrome Star Base',
    finish: 'Ergonomic 3D Armrests & Lumbar Support',
    dimensions: 'High-Back Executive Size',
    rating: 5.0,
    reviewsCount: 184,
    inStock: true,
    leadTime: 'In Stock • Same-Day Dispatch',
    isBestseller: true,
    tag: 'Bestseller',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDh14BrMdOwoCxHM0-vdcS4J1OadeYOG3aUs3N1ZjEJtmqpGk60MWTEBvU48KqZViiDOk6rjEG4g4TWU1EJvk4lTRz1YaL36IkgUJlNZSB4fY-YbOVryomKM7VNXfZvR94I13W3-i2se1zBlkY6sUsYivpRheO8pRp2N_QT0av27RFH9PdCbtuzkQxrSdeN51Ke4hbHEB0fs-C74VHHHQNlufJzo5L0EjdQcOq3VJsPrMN_Sp9bsfOo',
    description:
      'Lumbar support, 3D armrests, breathable Korean mesh, and reinforced chrome star base with heavy-duty castors.',
  },
  {
    id: 'steel-filing-cabinet',
    name: '4-Drawer Heavy Duty Steel Filing Cabinet',
    category: 'steel-filing-cabinets',
    price: 22000,
    woodType: '0.8mm Cold-Rolled Industrial Steel',
    finish: 'Textured Charcoal Gray Powder-Coat',
    dimensions: '4-Drawer Legal/A4 Size with Anti-Tilt Mechanism',
    rating: 5.0,
    reviewsCount: 92,
    inStock: true,
    leadTime: 'In Stock • Assembled',
    tag: 'Heavy Duty',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0CdGCurPnOeJ5ki3hWp8pmNbnmmHHybtE_G8q_eRCU9rkNQtM0WyN7gpmvmzu1G65w9iJbAZdsLK3b0CMQWwBFaISJEp3YH-TGBMqw8TZkopVveZuncTLE0YLlW4s8XdPqaQmuRBvEf_0Bl0Y-m5csB_fJq-ta3dPhJGdUjuO_RHEYkIVeGFHW6GU2GtJpMAnN9dpXXL8zZN794vxEKAKi9F-tNuloOCyvrJoGHkPxSB0WtLH5E9',
    description:
      '0.8mm cold-rolled steel, smooth ball-bearing runners, anti-tilt safety mechanism, and dual master keys.',
  },
  {
    id: 'fireproof-safe-box',
    name: 'Digital Fireproof Steel Safe Box',
    category: 'fireproof-safes',
    price: 35000,
    woodType: 'Reinforced Solid Hardened Steel',
    finish: 'Matte Black Steel with Chrome Motorized Bolts',
    dimensions: 'Commercial Document & Valuables Capacity',
    rating: 5.0,
    reviewsCount: 210,
    inStock: true,
    leadTime: 'In Stock • Secure Handling',
    tag: 'Fire-Rated',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVyavrJo6_z1r7gHmwqr40irLmNTPVXd7yeb6At1P8F-yMOC0wFI4GkoJhXKex9XCs3ir_ev4WJCCrdizUiIziFsLsNq7hPq4s34rG13fiOCs-qO43jHUR7SLYuJpSwMVRQlm82g5ZoYc0umTZdci-SnOnjREdirP2gL658Zt0cSt_BXq7njX1Rh4X-IIaj8030HSII88pixGaLqvEjDI0OllJ2qBu9krjTG0AgikwgmhZX-flgZ4r',
    description:
      '1-hour UL fire rating, digital touchscreen PIN + override key, and dual heavy motorized locking bolts.',
  },
  {
    id: 'l-shaped-desk',
    name: 'L-Shaped Executive Desk & Pedestal',
    category: 'office-desks',
    price: 45000,
    woodType: 'Hardwood Veneer & Heavy Steel Frame',
    finish: 'Scratch-Resistant Commercial Walnut / Oak',
    dimensions: '1800mm W with Integrated 3-Drawer Return',
    rating: 5.0,
    reviewsCount: 67,
    inStock: true,
    leadTime: 'In Stock • Professional Installation Included',
    isBestseller: true,
    tag: 'Executive',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3IXlDMiqFya70xmufQn-4RamYVGnYHEvhUu0YEVytZ0EMAau6h1kW7sYONUgF0Qxag21gft17MH1Ik5HDkxU_H9gzpiwLDk0x2KGVg_pHjwBrydKZWW2mhDmrD7boThKmT_mJ3NRNlAODp4n1uYR_s06W18HMA8WAS7A4MqoWfVoxSTQF6u3PKaDoN_IkHD-CNmtIwGOVAHRqSMuvwALZE_CVfwPLQ2ue0OIZfM-SVdsx25WndvkY',
    description:
      '1800mm scratch-resistant hardwood top, perforated modesty panel, integrated lockable 3-drawer pedestal, and brushed cable grommets.',
  },
];

// -------------------------------------------------------------
// CORPORATE B2B & FIT-OUT STORY
// -------------------------------------------------------------
export const storyContent = {
  badge: 'Enterprise & B2B Fit-Out Service',
  title: 'Furnishing an Entire Floor or New Headquarters?',
  description:
    'From space planning and CAD layouts to customized heavy steel fabrication and bulk delivery anywhere in East Africa. Speak directly with our corporate project engineers.',
  points: [
    {
      title: 'Direct ETR Invoicing',
      description: 'Official KRA compliant VAT invoices delivered instantly with your order.',
    },
    {
      title: 'Volume Tier Discounts',
      description: 'Special wholesale and institutional pricing tiers for orders above 10 units.',
    },
    {
      title: 'Dedicated Project Lead',
      description: 'Single point of contact for space planning, site delivery, and precision installation.',
    },
  ],
};

// -------------------------------------------------------------
// TESTIMONIALS
// -------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    quote:
      'We fitted three entire floors at our Westlands headquarters. The heavy-duty steel cabinets and executive mesh chairs have held up impeccably over 2 years of rigorous daily use.',
    author: 'David K. Mwangi',
    role: 'Head of Operations',
    company: 'FinTech Hub Nairobi (Westlands)',
  },
  {
    quote:
      'Their response to urgent corporate tenders is second to none. Official ETR invoices were provided instantly, and delivery to Upper Hill was concluded within 24 hours.',
    author: 'Faith Chebet',
    role: 'Procurement Director',
    company: 'Law Chambers Upper Hill',
  },
  {
    quote:
      'We ordered 8 digital fireproof safes for our Mombasa and Kisumu branches. G4S freight handling was smooth and Acacia took full responsibility until installation.',
    author: 'Peter Otieno',
    role: 'Facilities Lead',
    company: 'Regional Microfinance Kenya',
  },
];
