# Project Rules & Guidelines for Codex CLI — Acacia Furniture Kenya

## Stack Guidelines
- **Framework:** Next.js (App Router) with React 19/18.
- **Styling:** Tailwind CSS + Lucide React Icons.
- **Deployment Platform:** Cloudflare Pages (utilizing `@cloudflare/next-on-pages`).
- **Media Engine:** Supabase Storage (public bucket for images and Higgsfield MP4 video loops).
- **Brand & Origin:** Acacia Furniture Kenya — handcrafted solid East African Acacia timber (*Vachellia xanthophloea*) in Nairobi, Kenya.

## Architecture Rules
1. **Cloudflare Edge Compatibility:** Never use Node.js native libraries (`fs`, `path`, `crypto`). Standard Web APIs only.
2. **Design System:** Follow the neutral earth-tone palette strictly:
   - **Background:** `#F7F5F0`
   - **Cards:** `#EFECE6`
   - **Primary Accent/Buttons:** `#705335`
   - **Primary Text:** `#2C2A29`
   - **Muted Subtext:** `#8C857B`
   - **Border Color:** `#E5E0D8`
3. **Mobile Development Friendly:** Keep edits clean and isolated by component.
4. **Currency & Localization:** All prices in Kenyan Shillings (`KSh`), Lipa na M-Pesa direct checkout integration, Karen & Westlands Nairobi showroom context.

## Project Structure
```
├── .github/
│   └── workflows/
│       └── deploy.yml              # Cloudflare Pages CI/CD workflow
├── public/
│   ├── favicon.ico
│   └── placeholder-hero.jpg        # Temporary visual asset
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Fonts, Metadata, Styling)
│   │   ├── page.tsx                # Main Acacia Furniture Kenya Storefront
│   │   └── globals.css             # Tailwind Directives & Base Fonts
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation & Top Announcement Bar
│   │   ├── HeroSection.tsx         # Hero with Higgsfield/Supabase Video Loop
│   │   ├── TrustBadges.tsx         # 4-Column Value Proposition Bar
│   │   ├── CategoryCarousel.tsx    # Circular Category Badges (Dining, Living, Office, etc.)
│   │   ├── BestsellersGrid.tsx     # Bestsellers & Product Cards
│   │   └── Footer.tsx              # Showroom locations, UGC Links & Footer
│   └── lib/
│       └── supabase.ts             # Supabase Storage & Database Client
├── .env.local                      # Local API keys & Environment Variables
├── .env.example                    # Template for Cloudflare Environment Variables
├── AGENTS.md                       # Guidelines for Codex CLI & AI Agents
├── next.config.mjs                 # Next.js Config (Cloudflare compatibility)
├── package.json                    # Project dependencies
├── postcss.config.mjs              # PostCSS plugin config
├── tailwind.config.ts              # Custom Acacia earth-tone palette
└── wrangler.toml                   # Cloudflare Pages / Workers deployment config
```

## Developer Commands
- `npm run dev`: Start Next.js development server
- `npm run build`: Production build test
- `npm run pages:build`: Build Cloudflare Pages bundle (`@cloudflare/next-on-pages`)
- `npm run deploy`: Deploy directly to Cloudflare Pages via Wrangler
