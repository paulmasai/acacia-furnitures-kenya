"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import CategoryCarousel from "@/components/CategoryCarousel";
import BestsellersGrid from "@/components/BestsellersGrid";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";
import QuoteBag, { QuoteItem } from "@/components/QuoteBag";
import { products, Product, enquiryUrl } from "@/lib/catalog";

const BAG_KEY = "acacia-quote-bag-v1";
export default function Home() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [bagOpen, setBagOpen] = useState(false);
  const [bag, setBag] = useState<QuoteItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(BAG_KEY) || "[]");
      if (Array.isArray(saved)) {
        const seen = new Set<string>();
        setBag(
          saved.flatMap((item) => {
            if (
              !item ||
              typeof item.id !== "string" ||
              !Number.isInteger(item.quantity) ||
              item.quantity < 1 ||
              item.quantity > 999 ||
              seen.has(item.id)
            )
              return [];
            const match = products.find((p) => p.id === item.id);
            if (!match) return [];
            seen.add(item.id);
            return [{ product: match, quantity: item.quantity }];
          }),
        );
      }
    } catch {
      /* A blocked or stale local store must not prevent browsing. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(
        BAG_KEY,
        JSON.stringify(
          bag.map((item) => ({ id: item.product.id, quantity: item.quantity })),
        ),
      );
    } catch {
      /* Quote bag still works for this visit. */
    }
  }, [bag, ready]);
  function chooseCategory(id: string) {
    setCategory(id);
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  }
  function addToBag(p: Product) {
    setBag((items) =>
      items.some((item) => item.product.id === p.id)
        ? items.map((item) =>
            item.product.id === p.id
              ? { ...item, quantity: Math.min(999, item.quantity + 1) }
              : item,
          )
        : [...items, { product: p, quantity: 1 }],
    );
    setProduct(null);
    setBagOpen(true);
  }
  const eventChair = products.find((p) => p.sku === "ACF-CHR-003")!;
  const officeChair = products.find((p) => p.sku === "ACF-OFC-005")!;
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar
        count={bag.reduce((n, item) => n + item.quantity, 0)}
        onOpenBag={() => setBagOpen(true)}
        onCategory={chooseCategory}
        onSearch={() => {
          document
            .getElementById("collection")
            ?.scrollIntoView({ behavior: "smooth" });
          document
            .getElementById("catalog-search")
            ?.focus({ preventScroll: true });
        }}
      />
      <main id="main">
        <HeroSection
          onViewProduct={(id) => setProduct(products.find((p) => p.id === id)!)}
        />
        <TrustBadges />
        <CategoryCarousel onSelect={chooseCategory} />
        <section
          className="container collection-stories"
          aria-label="Explore furniture collections"
        >
          <a
            href="#collection"
            className="collection-story"
            onClick={() => chooseCategory("office-chairs")}
          >
            <div>
              <h2>
                A better seat.
                <br />A better workday.
              </h2>
              <p>Find your everyday office companion.</p>
              <span>
                Explore office chairs
                <ArrowRight size={17} />
              </span>
            </div>
            <Image
              src={officeChair.images[0].url}
              alt={officeChair.images[0].alt}
              width={270}
              height={300}
              className="object-contain"
            />
          </a>
          <a
            href="#collection"
            className="collection-story"
            onClick={() => chooseCategory("church-event-chairs")}
          >
            <div>
              <h2>
                Good company
                <br />
                starts here.
              </h2>
              <p>Seating for gatherings, big and small.</p>
              <span>
                Explore event seating
                <ArrowRight size={17} />
              </span>
            </div>
            <Image
              src={eventChair.images[0].url}
              alt={eventChair.images[0].alt}
              width={270}
              height={300}
              className="object-contain"
            />
          </a>
        </section>
        <BestsellersGrid
          category={category}
          onCategory={setCategory}
          query={query}
          onQuery={setQuery}
          onView={setProduct}
          onAdd={addToBag}
        />
        <section id="trade" className="container trade-section">
          <div>
            <h2>
              Big plans for
              <br />
              <em>your space?</em>
            </h2>
            <p>
              From a single workstation to a whole gathering place, we’ll help
              you put the right pieces together.
            </p>
            <a
              className="button primary"
              href={enquiryUrl(
                "Hello Acacia, I am planning a furniture purchase for my business or venue. Please help me with a bulk quotation, available finishes and delivery.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Let’s talk about your project
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="trade-details">
            <div>
              <h3>Made for your brief</h3>
              <p>
                Share your space, preferred pieces and quantities. Our team will
                help you choose from the collection.
              </p>
            </div>
            <div>
              <h3>A clear quotation</h3>
              <p>
                Confirm current stock, specifications and volume pricing before
                making your decision.
              </p>
            </div>
            <div>
              <h3>From Nairobi to your door</h3>
              <p>
                Delivery is quoted by location and order size. Ask us about your
                area and preferred timing.
              </p>
            </div>
          </div>
        </section>
        <section className="contact-band">
          <div className="container">
            <h2>A little guidance goes a long way.</h2>
            <a
              href={enquiryUrl(
                "Hello Acacia, I would like help choosing furniture for my space.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Find your fit with our team
              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      {product && (
        <ProductDetails
          key={product.id}
          product={product}
          onClose={() => setProduct(null)}
          onAdd={addToBag}
        />
      )}
      {bagOpen && (
        <QuoteBag
          items={bag}
          onClose={() => setBagOpen(false)}
          onQuantity={(id, quantity) =>
            setBag((items) =>
              quantity === 0
                ? items.filter((item) => item.product.id !== id)
                : items.map((item) =>
                    item.product.id === id ? { ...item, quantity } : item,
                  ),
            )
          }
        />
      )}
    </>
  );
}
