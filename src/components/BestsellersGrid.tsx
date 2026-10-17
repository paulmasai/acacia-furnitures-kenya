"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Plus, ArrowUpRight, X } from "lucide-react";
import { products, categories, Product, formatKsh } from "@/lib/catalog";
interface Props {
  category: string;
  onCategory: (id: string) => void;
  query: string;
  onQuery: (query: string) => void;
  onView: (product: Product) => void;
  onAdd: (product: Product) => void;
}
export default function BestsellersGrid({
  category,
  onCategory,
  query,
  onQuery,
  onView,
  onAdd,
}: Props) {
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const result = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        `${p.name} ${p.sku} ${p.material}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    );
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "featured")
      result.sort(
        (a, b) =>
          categories.findIndex((c) => c.id === a.category) -
          categories.findIndex((c) => c.id === b.category),
      );
    return result;
  }, [category, query, sort]);
  return (
    <section id="collection" className="collection-section">
      <div className="container">
        <div className="section-heading">
          <h2>Pieces with a purpose.</h2>
          <p>Find the right fit for your everyday.</p>
        </div>
        <div className="catalog-toolbar">
          <div className="filter-tabs" aria-label="Filter collection">
            {[{ id: "all", name: "All pieces" }, ...categories].map((c) => (
              <button
                key={c.id}
                aria-pressed={category === c.id}
                onClick={() => onCategory(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="catalog-tools">
            <div className="search-field">
              <Search size={17} />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search the collection"
                aria-label="Search the collection"
              />
              {query && (
                <button aria-label="Clear search" onClick={() => onQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
            <label className="sort-field">
              <span className="sr-only">Sort products</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Collection order</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <p className="result-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          {query ? ` matching “${query}”` : " to make your space your own"}
        </p>
        <div className="product-grid">
          {filtered.map((p) => (
            <article className="product-card" key={p.id}>
              <button
                className="product-photo"
                onClick={() => onView(p)}
                aria-label={`View ${p.name}`}
              >
                <Image
                  src={p.images[0].url}
                  alt={p.images[0].alt}
                  fill
                  sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 23vw"
                  className="object-contain"
                />
                <span className="photo-action">
                  <ArrowUpRight size={19} />
                </span>
                {p.images.length > 1 && (
                  <span className="photo-count">{p.images.length} photos</span>
                )}
              </button>
              <div className="product-info">
                <p className="product-category">
                  {categories.find((c) => c.id === p.category)?.name}
                </p>
                <h3>
                  <button onClick={() => onView(p)}>{p.name}</button>
                </h3>
                <div className="product-bottom">
                  <p>
                    {formatKsh(p.price)}
                    <small>per item</small>
                  </p>
                  <button
                    className="add-button"
                    onClick={() => onAdd(p)}
                    aria-label={`Add ${p.name} to quote bag`}
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">
            <Search size={32} />
            <h3>No pieces found</h3>
            <p>Try a different name, SKU or collection.</p>
            <button
              className="button secondary"
              onClick={() => {
                onQuery("");
                onCategory("all");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
        <p className="catalog-note">
          Prices shown per item. Please confirm stock, finishes and delivery
          with our team before ordering.
        </p>
      </div>
    </section>
  );
}
