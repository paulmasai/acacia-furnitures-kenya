# Acacia Furniture Kenya

Next.js App Router storefront, statically exported for **Cloudflare Pages**. No Vercel deployment or integrated payment processing. Customers build a quote bag and request a quotation through WhatsApp.

## Development and deployment

- `npm install` then `npm run dev`
- `npm run build` creates the deployable `out/` directory.
- `npm run deploy` builds and publishes to the existing Cloudflare Pages project.
- Pushes to `main` trigger `.github/workflows/deploy.yml`. Cloudflare API token and account ID must be configured as GitHub repository secrets.

## Catalog and assets

- `data drop/` preserves the supplied final media, manifests and design reference.
- `src/lib/catalog_extracted.json` is the product-detail and KSh price source.
- `src/lib/image-manifest.json` contains the 25 usable image records; the two absent archive records are excluded.
- `src/lib/catalog.ts` joins images to 17 products by SKU, including the shared photograph for all three safe SKUs.
- `public/catalog/` contains the production images, with supplied filenames and category directories preserved.
- `public/brand/` contains the supplied logo and favicon.

Images work without external services. To use a public Supabase bucket, upload the same directory structure and set `NEXT_PUBLIC_CATALOG_MEDIA_URL` to its public base URL before building. No service-role key belongs in the frontend.

The source catalog requests confirmation of live stock and some specifications. The storefront preserves that uncertainty, displays per-item prices, and does not invent ratings, reviews, fire certifications or inventory counts. Photographs of alternative finishes are gallery images, not independently priced variants. The quote bag stores only SKU identifiers and quantities in the visitor's local storage; prices are always read from the current catalog.

Fonts are bundled locally under `src/app/fonts/` with their SIL Open Font Licenses, so builds do not depend on Google Fonts availability.

## UI verification

Check desktop and mobile layouts, all four category filters, search/empty results, price sorting, product galleries, keyboard dialog dismissal, quote quantity changes/removal, refresh persistence, and the encoded WhatsApp quotation. Browser-check artifacts belong in ignored `output/playwright/`.
