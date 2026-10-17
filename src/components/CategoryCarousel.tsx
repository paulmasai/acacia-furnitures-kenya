import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/catalog";
export default function CategoryCarousel({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  return (
    <section id="spaces" className="container section-space">
      <div className="section-heading">
        <h2>Find your kind of space.</h2>
        <p>Four collections. Everyday possibilities.</p>
      </div>
      <div className="category-grid">
        {categories.map((c) => (
          <button
            className="category"
            key={c.id}
            onClick={() => onSelect(c.id)}
          >
            <div className="category-image">
              <Image
                src={c.image.url}
                alt={c.image.alt}
                fill
                sizes="(max-width: 600px) 45vw, 23vw"
                className="object-contain"
              />
            </div>
            <div className="category-title">
              <h3>{c.name}</h3>
              <ArrowUpRight size={18} />
            </div>
            <p>{c.count} models</p>
          </button>
        ))}
      </div>
    </section>
  );
}
