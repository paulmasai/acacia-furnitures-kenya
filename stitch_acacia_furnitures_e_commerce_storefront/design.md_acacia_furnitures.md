# Design System: Acacia Furnitures (Commercial & Architectural Grade)

## 1. Brand Identity & Vision
Acacia Furnitures is Kenya’s premier commercial and corporate furniture manufacturer and direct importer based in Nairobi. The visual identity merges the luxury and resilience of the African Acacia tree with clean, Scandinavian functionalism and architectural-grade corporate reliability.

- **Primary Brand Emblem**: Luxury golden Acacia tree umbrella canopy bridging into executive desk and chair geometry.
- **Brand Personality**: Prestigious, heavy-duty, dependable, structured, and modern African enterprise.
- **Tone of Voice**: Authoritative yet accessible, trustworthy, transparent, and built for corporate procurement managers and business owners alike.

---

## 2. Color Palette & Tokens

### Primary & Brand Colors
- **Acacia Gold (`--color-primary`)**: `#E2A028`
  - *Usage*: Primary action buttons, badges, key accents, ratings stars, prominent highlights.
- **Amber Gold Hover (`--color-primary-hover`)**: `#B87B15`
  - *Usage*: Hover and active interactive states for primary buttons and links.
- **Deep Onyx Charcoal (`--color-charcoal` / `--color-surface-dark`)**: `#1C1917`
  - *Usage*: High-contrast text, primary headlines, corporate B2B banners, footers.
- **Warm Bronze Accent (`--color-secondary`)**: `#8C5818`
  - *Usage*: Secondary accents, subtle tags, sub-headings.

### Background & Surface Tones
- **Warm Canvas Background (`--color-surface`)**: `#FAF9F5` / `#FFF8F5`
  - *Usage*: Global page background providing warmth and Scandinavian aesthetic without harsh pure-white glare.
- **Card Container Lowest (`--color-surface-container`)**: `#FFFFFF`
  - *Usage*: Product cards, value proposition cards, input containers.
- **Surface Muted / Low (`--color-surface-dim`)**: `#F3EFEA` / `#FAF2EE`
  - *Usage*: Filter pill backgrounds, light borders, subtle section divisions.
- **Surface Outline / Divider (`--color-border`)**: `#E5DFD7`
  - *Usage*: Card borders, table dividers, form input borders.

### Semantic & Status Tokens
- **Bestseller / Warm Amber**: `#D97706`
- **Heavy Duty / Industrial Steel**: `#4B5563`
- **Fire-Rated / Security Crimson**: `#DC2626`
- **Executive / Timber Bronze**: `#78350F`
- **Stock Available Green**: `#15803D`
- **ETR / Tax Compliant Grey**: `#64748B`

---

## 3. Typography Hierarchy

### Font Families
- **Primary Typeface**: `Montserrat`, sans-serif (Headings, Buttons, Badges, Metrics)
- **Secondary / Body Typeface**: `Inter` or `system-ui`, -apple-system, sans-serif (Body copy, specs, technical tables)

### Type Scale
- **Display 1 (Desktop Hero)**: `44px`–`52px` | Weight: `800` (Extra Bold) | Line Height: `1.15` | Letter Spacing: `-0.02em`
- **Heading 1 (Section Titles)**: `28px`–`34px` | Weight: `700` (Bold) | Line Height: `1.2`
- **Heading 2 (Card Titles / Subsections)**: `18px`–`22px` | Weight: `600` (Semi-Bold) | Line Height: `1.3`
- **Sub-label / Kicker (Overline)**: `11px`–`13px` | Weight: `700` (Bold) | Uppercase | Letter Spacing: `0.08em`
- **Body Large**: `16px` | Weight: `400`–`500` | Line Height: `1.6`
- **Body Regular**: `14px` | Weight: `400`–`500` | Line Height: `1.5`
- **Caption / Meta**: `12px` | Weight: `500` | Line Height: `1.4`
- **Price Large**: `20px`–`24px` | Weight: `800` (Extra Bold)

---

## 4. Spacing, Elevation & Radii

### Spacing System (8pt Grid)
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-12`: `48px`
- `space-16`: `64px`

### Border Radii
- **Tag / Badge / Pill**: `9999px` (Full pill)
- **Buttons**: `8px` (Slightly rounded for contemporary commercial precision)
- **Cards & Containers**: `12px` to `16px`
- **Large Hero / B2B Panels**: `16px` to `20px`

### Elevation & Shadows
- **Card Rest**: `0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)`
- **Card Hover**: `0 10px 25px -5px rgba(226, 160, 40, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`
- **Floating Bar / Dropdown**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)`

---

## 5. UI Components & Layout Patterns

### 1. Announcement Chrome & Utilities
- Slim top banner in brand gold (`#E2A028`) featuring nationwide logistics guarantees:
  - *"Free Nairobi Delivery • Countrywide Shipping via G4S / Wells Fargo • Lipa na M-Pesa Available"*
- Quick-dial corporate phone number (`+254 700 123 456`) and M-Pesa Till reference.

### 2. Search & Category Filter Navigation
- High-contrast search input with gold search action icon.
- Horizontal category pill filters on mobile and category circles with clean drop-shadowed product cuts on desktop.

### 3. Product Cards
- **Structure**:
  1. Top badge strip (e.g., `BESTSELLER`, `HEAVY DUTY`, `FIRE-RATED`, `EXECUTIVE`).
  2. Floating wishlist icon (heart/bookmark).
  3. Clean photography on neutral off-white background with subtle padding.
  4. Category classification overline + star rating with review counts.
  5. Bold product title (2-line clamped).
  6. Technical specs bullet points (e.g., `0.8mm cold-rolled steel`, `1-hour UL fire-rating`).
  7. Clear pricing block: `KSh XX,XXX` + tax tag (`Tax Inc. (ETR)`).
  8. Full-width primary CTA button: **"Order via WhatsApp"** with WhatsApp icon.

### 4. Value Proposition Badges
- 4-column desktop / 2×2 mobile layout featuring:
  - Heavy-Duty Steel & Timber
  - Same-Day Nairobi Delivery
  - Lipa na M-Pesa & Invoicing
  - 1-Year Commercial Warranty

### 5. Corporate Fit-Out / B2B Section
- Deep Onyx Charcoal card (`#1C1917`) with gold buttons and checkmarks.
- Target audience: Procurement managers, architects, and facilities directors.
- Key highlights: Direct ETR invoicing, volume tier pricing (15% - 30%), and turnkey CAD layout drafting.

### 6. Showroom Locator & Local Trust Seals
- Nairobi Showrooms:
  - **Mombasa Road HQ Hub**: Enterprise Plaza, Unit B2 (Direct warehouse pickup & viewing).
  - **Westlands Corporate Studio**: Woodvale Grove, 4th Floor (Architectural & private consultation).
- Verified trust partner lockups:
  - Lipa na M-Pesa (Buy Goods Till 892 4110)
  - Wells Fargo Courier Logistics
  - G4S Kenya Secure Handling
  - KRA ETR Verified Tax Compliance

---

## 6. Responsive Breakpoints & Device Behavior
- **Desktop (`>= 1024px`)**:
  - Full mega-navigation with category dropdowns.
  - 4-column bestseller product grid.
  - Side-by-side hero composition with 16:9 showroom photography.
- **Mobile (`<= 768px`)**:
  - Compact header with search and filter chips.
  - Single-column high-touch product cards (minimum button tap height: `48px`).
  - Fixed bottom tab bar (`Home`, `Categories`, `WhatsApp`, `Cart`).
