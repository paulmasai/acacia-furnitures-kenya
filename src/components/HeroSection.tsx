import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, formatKsh } from "@/lib/catalog";
export default function HeroSection({
  onViewProduct,
}: {
  onViewProduct: (id: string) => void;
}) {
  const desk = products.find((p) => p.sku === "ACF-DSK-001")!;
  return (
    <section className="container hero">
      <div className="hero-copy">
        <h1>
          Good furniture.
          <br />
          Better everyday
          <br />
          <em>spaces.</em>
        </h1>
        <p>
          Thoughtful pieces for the way you work and gather. Explore office
          chairs, desks and event seating, from our Nairobi collection.
        </p>
        <a className="button primary" href="#collection">
          Explore the collection
          <ArrowRight size={18} />
        </a>
        <div className="hero-note">
          <span>Nairobi, Kenya</span>
          <span>Delivery quoted countrywide</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image">
          <Image
            src={desk.images[0].url}
            alt={desk.images[0].alt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
            className="object-contain"
          />
        </div>
        <div className="hero-product">
          <div>
            <span>A place to do your best work</span>
            <h2>Z-Leg Executive Desk</h2>
            <p>{formatKsh(desk.price)}</p>
          </div>
          <button
            className="round-button"
            aria-label="View Z-Leg Executive Desk"
            onClick={() => onViewProduct(desk.id)}
          >
            <ArrowUpRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
