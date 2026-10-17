import source from "./catalog_extracted.json";
import manifest from "./image-manifest.json";

export interface ProductImage {
  url: string;
  alt: string;
}
export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  material: string;
  finish: string;
  dimensions: string;
  description: string;
  specifications: string;
  images: ProductImage[];
}
const categoryIds: Record<string, string> = {
  "Office Chairs": "office-chairs",
  Desks: "desks",
  Safes: "safes",
  "Church & Event Chairs": "church-event-chairs",
};
// A public storage base can replace bundled assets without changing SKU mappings.
const mediaBase = (
  process.env.NEXT_PUBLIC_CATALOG_MEDIA_URL || "/catalog"
).replace(/\/$/, "");
export const products: Product[] = source.map((row) => {
  const images = manifest
    .filter((image) => image.sku.split(" / ").includes(row.SKU))
    .sort((a, b) => Number(b.is_primary) - Number(a.is_primary))
    .map((image) => ({
      url: `${mediaBase}/${image.relative_path}`,
      alt: image.alt_text,
    }));
  return {
    id: row.SKU.toLowerCase(),
    sku: row.SKU,
    name: row["Product name"],
    category: categoryIds[row.Category],
    price: Number(row["Price per unit (KSh)"]),
    material: row.Material,
    finish: row["Colour options"],
    dimensions:
      "Dimensions" in row && row.Dimensions
        ? row.Dimensions
        : "Please confirm dimensions with our team.",
    description: row["Short description"],
    specifications: row["Source-listed specifications"],
    images,
  };
});
export const categories = [
  {
    id: "office-chairs",
    name: "Office chairs",
    description: "Make room for a better working day.",
    sku: "ACF-OFC-001",
  },
  {
    id: "desks",
    name: "Office desks",
    description: "A considered place to get things done.",
    sku: "ACF-DSK-001",
  },
  {
    id: "church-event-chairs",
    name: "Event seating",
    description: "Bring people together, comfortably.",
    sku: "ACF-CHR-003",
  },
  {
    id: "safes",
    name: "Digital safes",
    description: "A dedicated place for what matters.",
    sku: "ACF-SAF-060",
  },
].map((category) => ({
  ...category,
  count: products.filter((p) => p.category === category.id).length,
  image: products.find((p) => p.sku === category.sku)!.images[0],
}));
export const formatKsh = (amount: number) =>
  `KSh ${amount.toLocaleString("en-KE")}`;
export const business = {
  name: "Acacia Furniture Kenya",
  phone: "+254 703 404 563",
  whatsapp: "254703404563",
  email: "sales@acaciafurniture.co.ke",
};
export const enquiryUrl = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
